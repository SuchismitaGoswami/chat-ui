import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatroomComponent} from './chat-ui/chatroom/chatroom.component'
import {NavbarComponent} from './chat-ui/navbar/navbar.component'

const routes: Routes = [
  { path: 'chatroom/:name', component: ChatroomComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
