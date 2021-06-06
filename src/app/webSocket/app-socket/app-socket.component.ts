import { Component, OnInit } from '@angular/core';
//import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { RegisterPayload } from 'src/app/authentif/register-payload';

import Stomp from "stompjs"

@Component({
  selector: 'app-app-socket',
  templateUrl: './app-socket.component.html',
  styleUrls: ['./app-socket.component.scss']
})
export class AppSocketComponent implements OnInit {


  greetings: string[] = [];
  disabled = true;
  user: RegisterPayload;
  email: string;
  private stompClient = null;

  
  
  constructor() { }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/twe-stomp-endpoint');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/hi', function (hello) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.stompClient.send(
      '/twe/hello',
      {},
      JSON.stringify({ 'email': this.email })
    );
  }

  showGreeting(message) {
    this.greetings.push(message);
  }


  ngOnInit(){
    
  }
}
