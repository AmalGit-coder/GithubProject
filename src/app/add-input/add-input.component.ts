import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss']
})
export class AddInputComponent implements OnInit {


  values = [];

  constructor() { }

  ngOnInit(): void {
  }


  removeValue(i){
    this.values.splice(i,1);
  }

  addValue(){
this.values.push({value: ""});
  }






}
