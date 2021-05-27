import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {


  


  public socket = io("https://itbs-backend.herokuapp.com/");
  public messages = [];
  public message;

  constructor() { }

  ngOnInit(): void {
    this.socket.on('my broadcast', (data) =>
     { this.messages.push(data) })

  }

   sendMessage(){
     console.log(this.message);
     //envoie par emit
     this.socket.emit('mymessage', "amal:" + this.message)
  }

  




}
