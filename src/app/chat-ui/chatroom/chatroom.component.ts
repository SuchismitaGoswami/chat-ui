import { Component, OnInit } from '@angular/core';
import { ChatroomService } from '../../chat-core/chatroom.service'
import { ActivatedRoute } from '@angular/router'
import { Chat } from '../../type'
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  username: String
  message: String
  messages: Chat[] = []
  chatroomName: String
  constructor(private _chatroomService: ChatroomService, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => { this.chatroomName = params['name']; });
  }

  setUserName(username: String) {
    this.username = username.toLocaleUpperCase();
  }
  sendMessage() {
    this._chatroomService.sendMessage(this.username, this.message);
    this.message = "";
  }
  ngOnInit() {
    this._chatroomService
      .onNewMessage()
      .subscribe((message: Chat) => {
        // console.log(message.username , message.message)
        this.messages.push(message);
        console.log(this.messages)
      });
      
  }

  joinChatRoom(){
    this._chatroomService.joinChatRoom(this.username)
  }

}
