import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'AngularFullCourse';
  bool: Boolean = true;

  constructor() {
  }
  buttonClick() {
    console.log("Button Click Event Worked.");

  }

  ngAfterViewInit(): void {

  }
}
