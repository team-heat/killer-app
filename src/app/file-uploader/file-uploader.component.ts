import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  public static id: number;
  public labelText: string;
  private initialLabelText: string = 'Choose a file...';

  constructor() {
    FileUploaderComponent.id = this.generateUniqueId();
    this.labelText = this.initialLabelText;
  }

  ngOnInit() { }

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
