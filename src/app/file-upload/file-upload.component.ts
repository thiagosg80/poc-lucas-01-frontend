import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  files: File[] = [];
  @Output() selectedFiles = new EventEmitter<File[]>;

  onFileSelected(event: Event) {
    const TARGET: any = event.target;
    this.files = Array.from(TARGET.files);
    this.selectedFiles.emit(this.files);
  }

  hasFiles(): boolean {
    return this.files.length > 0;
  }
}
