import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contacts:Contact[];

  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getContacts();
    console.log(this.contacts)
  }

  ngOnInit() {
  }

}
