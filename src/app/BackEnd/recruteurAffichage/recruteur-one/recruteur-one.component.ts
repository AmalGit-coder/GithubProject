import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class recruteurOne {

  constructor(
public id: number,
public firstname: string,
public lastname: string,
public department: string,
public email: string,
public country: string) {  }
}


@Component({
  selector: 'app-recruteur-one',
  templateUrl: './recruteur-one.component.html',
  styleUrls: ['./recruteur-one.component.scss']
})
export class RecruteurOneComponent implements OnInit {


recruteursOne: recruteurOne[];


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRecruteursOne();
  }






getRecruteursOne(){
  this.httpClient.get<any>('http://localhost:8080/recruteur').subscribe(
    response => {
      console.log(response);
      this.recruteursOne = response;
    }
  )
}




}
