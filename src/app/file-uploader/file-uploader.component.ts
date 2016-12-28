import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  public static id: number;
  public labelText: string;
  private initialLabelText: string = 'Choose a file...';

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: NgUploaderOptions = {
    url: '/api/upload'
  };
  sizeLimit = 2000000;

  constructor() {
    FileUploaderComponent.id = this.generateUniqueId();
    this.labelText = this.initialLabelText;
  }

  ngOnInit() { }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

  updateLabel(event) {
    const target = event.target;
    const maxNameLength = 15;

    if (!target.files.length) {
      this.labelText = this.initialLabelText;
    } else if (target.files.length > 1) {
      this.labelText = `${target.files.length} files selected.`;
    } else {
      const fileName = target.value.split('\\').pop();

      const startIndex = fileName.length - maxNameLength;
      const shortenedFileName = fileName.substr(startIndex, maxNameLength);

      this.labelText = fileName.length < maxNameLength ? fileName : '...' + shortenedFileName;
    }
  }

  private generateUniqueId(): number {
    return Math.floor(FileUploaderComponent.id || 0 + Math.random() * 10000007);
  }
}
