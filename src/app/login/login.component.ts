import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs/internal/observable/of';
import { pipe } from 'rxjs/internal/util/pipe';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
export interface formdetail {
  firstName: any,
  lastName: any
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChildren('highlight')
  color!: QueryList<any>;
  constructor(private router: Router, public service: ServiceService) {
  }

  firstName: string = '';
  lastName: string = '';
  Number = 0;
  forms = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  get form() {
    return this.forms.controls;
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.color);
  }
  submit() {
    let formDetail = {
      firstName: this.firstName,
      lastName: this.lastName,
    }
    // let URL = 'http://127.0.0.1:8001/login';
    // const apiData = ajax('http://127.0.0.1:8001/login');
    // let result = apiData.subscribe((result1) => {
    //   console.log(result1);
    // })
    const $data = of(0,1,2,4,5,6,7,8,9,10);
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    const rest = squareOddVals($data);
    rest.subscribe((result) => {
      console.log(result, 'RESULT');
    })
    
    if (formDetail) {
        this.router.navigate(['/navtool']);
    }

    return formDetail;
  }

}
