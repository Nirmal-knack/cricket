import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navtool',
  templateUrl: './navtool.component.html',
  styleUrls: ['./navtool.component.css']
})
export class NavtoolComponent implements OnInit {
 amazonData:any;
  constructor(public service:ServiceService, public route: Router) {
    this.service.getData().subscribe((response) =>{
      console.log(response);
      this.amazonData = response.results;
    });
   }

  ngOnInit(): void {
  }

  shoppingCart(){
    console.log(this.amazonData, 'amazonData');
  }
  scorer(event:any) {
    console.log(event, 'event');
    this.route.navigate(['/scorer'],{queryParams:{id:1, name:'nirmal'}});
  }

}
