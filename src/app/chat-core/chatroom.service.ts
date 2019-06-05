import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Contact, Category, Chat } from '../type'
@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  private socket: SocketIOClient.Socket
  constructor() {
    this.socket = io(environment.chatServerAPIURL);
  }

  joinChatRoom(username: String, chatRoomName: String) {
    this.socket.emit('join', `${username}`,`${chatRoomName}`);
  }
  sendMessage(username: String, chatRoomName: String, message: String) {
    console.log(`${username}:${message}`)
    this.socket.emit('newMessage', { 'username': `${username}`, 'message': `${message}`, 'chatRoomName': `${chatRoomName} `});
  }
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('newMessage', (message: Chat) => {
        console.log('Found New Message')
        console.log(message);
        observer.next(message);
      })
    })
  }

  getContacts(): Contact[] {
    let contacts: Contact[] = [
      { name: "Barbara J. Coggins", phone: "512-964-2757", image: "assets/imgs/chatroom.png", email: "BarbaraJCoggins@rhyta.com", category: "Favorites" },
      { name: "Leslie S. Alcantara", phone: "360-684-1334", image: "assets/imgs/chatroom.png", email: "LeslieSAlcantara@teleworm.us", category: "Missed" },
      { name: "Chad S. Miles", phone: "520-573-7903", image: "assets/imgs/chatroom.png", email: "ChadSMiles@rhyta.com", category: "Favorites" },
      { name: "Michael A. Blevins", phone: "530-480-1961", image: "assets/imgs/chatroom.png", email: "MichaelABlevins@armyspy.com", category: "Missed" },
      { name: "Jane K. Hernandez", phone: "404-781-0805", image: "assets/imgs/chatroom.png", email: "JaneKHernandez@teleworm.us", category: "Favorites" },
      { name: "Kim D. Thomas", phone: "603-583-9043", image: "assets/imgs/chatroom.png", email: "KimDThomas@teleworm.us", category: "Outgoing call" },
      { name: "Donald L. Jordan", phone: "772-766-2842", image: "assets/imgs/chatroom.png", email: "DonaldLJordan@dayrep.com", category: "Favorites" },
      { name: "Nicole A. Rios", phone: "213-812-8400", image: "assets/imgs/chatroom.png", email: "NicoleARios@armyspy.com", category: "Missed" },
      { name: "Barbara M. Roberts", phone: "614-365-7945", image: "assets/imgs/chatroom.png", email: "BarbaraMRoberts@armyspy.com", category: "Outgoing call" }
    ];
    return contacts;
  }
  getCategories(): Category[] {
    let categories: Category[] = [
      {
        text: "Chatrooms",
        icon: "user"
      }, {
        text: "Missed",
        icon: "clock",
        badge: 3
      }, {
        text: "Favorites",
        icon: "favorites"
      }
    ];
    return categories;
  }
}
