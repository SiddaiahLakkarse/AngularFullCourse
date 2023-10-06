import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'AngularFullCourse';
  username: string | undefined;

  constructor() {
  }
  keyupEvent() {

    console.log(this.username);

  }

  ngAfterViewInit(): void {

  }
}
