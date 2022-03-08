import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContentItem?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addContent(id: string, title: string, description: string, creator: string, image: string, type: string, tags: string): void {
    this.newContentItem = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: image,
      type: type,
      tags: tags.split(","),
    };
    this.newContentEvent.emit(this.newContentItem);
    let contentPromise = new Promise(() => {
      this.newContentEvent.emit(this.newContentItem);
    });
    contentPromise.then(success => console.log(success)).catch(failure => console.log(failure));
  }

  Number(value: string) {
    return 0;
  }
}
