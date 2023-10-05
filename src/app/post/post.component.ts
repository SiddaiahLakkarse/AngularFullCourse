import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postParentMessage: string = 'Message coming from Post Component.';

  @Input() fromParent: string | undefined;


  constructor() { };

  ngOnInit(): void {
  }

}
