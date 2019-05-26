import { Component, OnInit } from '@angular/core';
import {Category} from '../../type'
import DataSource from 'devextreme/data/data_source';
import {ChatroomService} from '../../chat-core/chatroom.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navBarData: Category[];
  listData: any[];
  currentData: any;

  constructor(service: ChatroomService) { 
      let contacts = service.getContacts();
      this.navBarData = service.getCategories();

      this.listData = [
          {
              data: new DataSource({
                  store: contacts,
                  sort: "name"
              })
          }, {
              data: new DataSource({
                  store: contacts,
                  sort: "name",
                  filter: ["category", "=", "Missed"]
              })
          }, {
              data: new DataSource({
                  store: contacts,
                  sort: "name",
                  filter: ["category", "=", "Favorites"]
              })
          }
      ];
      this.currentData = this.listData[0].data;
  }
  selectionChanged(e) {
      this.currentData = this.listData[e.itemIndex].data;
  }

  ngOnInit() {
  }

}
