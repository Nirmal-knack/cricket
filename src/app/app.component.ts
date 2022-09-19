import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  title = 'AngularWithCloud';
  @ViewChild('data')
  num!: LoginComponent;
}
