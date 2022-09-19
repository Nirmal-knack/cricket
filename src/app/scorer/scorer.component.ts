import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})
export class ScorerComponent implements OnInit {
  @ViewChild('model')
  model!: ModelComponent;

  striker = ''
  nonStriker = '';
  display = 'none';
  batsmanDetails: any = [];
  currentBatsmanRun = 0;
  currentBatsmanFours = 0;
  currentBatsmansixes = 0;
  nonFacingBatman: any = [];
  nonFacingBatmanRun = 0;
  strikerRun = 0;
  four = 0;
  sixes = 0;
  constructor(public activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((data) => {
      console.log(data['name'], 'data');
    })

  }

  ngOnInit(): void {
  }
  openModal() {
    this.display = "block";
    this.model.display = 'block';
  }
  onOpen(event: any) {
    let strikerName = {
      striker: event.striker,
      run: this.currentBatsmanRun,
      four: this.currentBatsmanFours,
      sixes: this.currentBatsmansixes 
    }
    let nonstrikerName = {
      nonStriker: event.nonStriker,
      run: 0
    }
    this.batsmanDetails.push(strikerName);
    this.nonFacingBatman.push(nonstrikerName);
  }


  runs(run: any) {
    if (run % 2 == 0 && typeof run == 'number') {
      this.strikerRun = this.strikerRun + run;
      console.log(run, 'sixes');
      if (run === 4) {
        this.four = this.four + 1;
      } else if (run === 6) {
        this.sixes = this.sixes + 1;
      }
      this.batsmanDetails.forEach((value: any) => {
        value.run = this.strikerRun;
        value.four = this.four;
        value.sixes = this.sixes;
      });
    } else if (typeof run == 'number') {
      this.strikerRun = this.strikerRun + run;
      this.batsmanDetails.forEach((value: any) => {
        value.run = this.strikerRun;
      });
    } else {
      console.log('wide or NoBall');
    }
  }

}
