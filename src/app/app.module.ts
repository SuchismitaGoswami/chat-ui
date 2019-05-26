import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chat-ui/chatroom/chatroom.component';
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxListModule, DxNavBarModule, DxTemplateModule } from 'devextreme-angular';
import { NavbarComponent } from './chat-ui/navbar/navbar.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    DxListModule,
    DxNavBarModule,
    DxTemplateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);