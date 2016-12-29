import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploadResponse } from './../models/file-upload-response.model';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  @Output() onFileUpload: EventEmitter<FileUploadResponse[]> = new EventEmitter<FileUploadResponse[]>();

  public labelText: string;
  private initialLabelText: string = 'Choose a file...';

  uploadedFiles: FileUploadResponse[] = [];
  hasBaseDropZoneOver: boolean = false;
  options: NgUploaderOptions = {
    url: '/api/upload'
  };
  sizeLimit = 2000000;

  constructor() {
    this.labelText = this.initialLabelText;
  }

  ngOnInit() { }

  handleUpload(data: any): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadedFiles.push(data);
      this.onFileUpload.emit([...this.uploadedFiles]);
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile: any): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

  updateLabel(event: any) {
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
}
