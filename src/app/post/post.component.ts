import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postParentMessage: string = 'Message coming from Post Component.';

  @Input() fromParent: string | undefined;
  childMessage: String = 'From Child Component';

  outPutChildMessage: string = 'Message from child component Via OutPut.';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { };

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outPutChildMessage);
  }
}
