import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-dropzone',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <label>{{ label }} *</label>
      <div class="drop-zone" (drop)="dropHandler($event)" (dragover)="dragOverHandler($event)">
        @if(!image) {
          <p>{{ placeholder }} (png, jpeg)</p>
        } @else {
          <div class="img">
            <img *ngIf="imageUrl" [src]="imageUrl" alt="Selected Image" />
            <p>{{ image.name }}</p> 
            <div class="delete"(click)="delete()">
              <span>x</span>
            </div>
          </div>
        }
      </div>
      @if(!isValidImageType) {
        <p class="error">Type de fichier non pris en charge, sélectioné une image.</p>
      }
    </div>
  `,
  styleUrl: './img-dropzone.component.scss'
})
export class ImgDropzoneComponent {
  @Input() label = "";
  @Input() placeholder = "";
  @Output() onImageChange = new EventEmitter<string | ArrayBuffer | null | undefined>();

  isValidImageType = true;
  image: File |undefined;
  imageUrl: string | ArrayBuffer | null | undefined = null;

  dropHandler(event: DragEvent) {
    event.preventDefault();
    if(this.image) return;

    const { dataTransfer } = event;

    if (dataTransfer?.items) {
      for (let i = 0; i < dataTransfer.items.length; i++) {
        const item = dataTransfer.items[i];
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file?.type.startsWith('image/')) {
            this.isValidImageType = true;
            this.image = file;
            const reader = new FileReader();
        
            reader.onload = (e) => {
              this.imageUrl = e.target?.result;
              this.onImageChange.emit(this.imageUrl);
            };
        
            reader.readAsDataURL(file);
            
          } else {
            this.isValidImageType = false;
          }
        }
      }
    }
  }

  dragOverHandler(event: Event) {
    event.preventDefault();
  }

  delete() {
    this.image = undefined;
    this.imageUrl = undefined;
    this.onImageChange.emit(this.imageUrl);
  }
}
