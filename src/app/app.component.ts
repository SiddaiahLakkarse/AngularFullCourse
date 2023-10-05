import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'AngularFullCourse';
  message: string = 'Message from Typescript component file.';
  imgURL: string = 'assets/Images/sample.jpg';

  constructor() {
  }


  ngAfterViewInit(): void {

  }
}
