import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  private socket: SocketIOClient.Socket
  constructor() {
    this.socket = io(environment.chatServerAPIURL);
  }

  joinChatRoom(username:String) {
    this.socket.emit('join', `${username}`)
  }
  sendMessage(username:String, message:String) {
    console.log(`${username}:${message}`)
    this.socket.emit('join', `${username}:${message}`);
  }
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('newMessage', (message) => {
        observer.next(message);
      })
    })
  }
}
