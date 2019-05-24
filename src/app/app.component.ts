import { Component } from '@angular/core';
import {ChatroomService} from './chat-core/chatroom.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatroomService]
})
export class AppComponent {
  title = 'chat-ui';
}
