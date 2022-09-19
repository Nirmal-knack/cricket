import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {


  display = 'none';
  striker = '';
  nonStriker = '';
  batsmanDetails:any;
  @Output() open: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  save() {
    this.batsmanDetails = {
      striker: this.striker,
      nonStriker: this.nonStriker
    }
    this.display = "none";
    this.open.emit(this.batsmanDetails);

  }
}
