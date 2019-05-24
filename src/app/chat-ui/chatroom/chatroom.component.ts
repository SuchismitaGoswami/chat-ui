import { Component, OnInit } from '@angular/core';
import {ChatroomService} from '../../chat-core/chatroom.service'
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  username:String
  message:String
  messages:String[] = []
  constructor(private _chatroomService:ChatroomService) { }

  setUserName(username:String){
   this.username = username.toLocaleUpperCase();
  }
  sendMessage(){
    console.log(this.message);
   this._chatroomService.sendMessage(this.username,this.message);
  }
  ngOnInit() {
    this._chatroomService
    .onNewMessage()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  }

}
