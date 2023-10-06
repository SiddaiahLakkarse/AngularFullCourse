import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  postTitle: string | undefined;
  postDetails: string | undefined;
  imageURL: string | undefined;
  postURL: string | undefined;
  addBackGround: boolean | undefined;

  constructor() {
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
}
