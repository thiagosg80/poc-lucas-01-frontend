import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload-section',
  templateUrl: './file-upload-section.component.html',
  styleUrls: ['./file-upload-section.component.scss']
})
export class FileUploadSectionComponent {
  files: File[] = [];

  setFiles(input: File[]): void {
    this.files = input;
  }

  send(): void {
    console.log(this.files)
  }

  hasFiles(): boolean {
    return this.files.length > 0;
  }
}
