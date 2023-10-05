import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor() {
    console.log(this.childComp);
  }

  @ViewChild(PostComponent) childComp: any;

  title = 'AngularFullCourse';
  parentMessage = 'Message coming from parent Component.'
  fromChildOutput: string | undefined;

  receiveMessage(event: any) {
    this.fromChildOutput = event;

  }
  ngAfterViewInit(): void {
    console.log(this.childComp.childMessage);

  }
}
