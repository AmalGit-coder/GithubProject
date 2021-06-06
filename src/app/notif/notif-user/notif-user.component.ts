import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-notif-user',
  templateUrl: './notif-user.component.html',
  styleUrls: ['./notif-user.component.scss']
})
export class NotifUserComponent{

 

  constructor(private webSocketService: WebSocketService) {

    let stompClient = this.webSocketService.connect();
// For All user
stompClient.connect({}, frame => {

 stompClient.subscribe('/topic/notification', notifications => {

    console.log(notifications.body);

  })

});
// For specific user
stompClient.connect({}, frame => {
        
  stompClient.subscribe('/user/userId/reply', data => {
            
             console.log(data)

        })

    });
}

}
