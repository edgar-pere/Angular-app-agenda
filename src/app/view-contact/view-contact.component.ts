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
    this.contactsService.getContacts().valueChanges().subscribe((value: Contact[]) => {
      this.contacts = value;
      console.log(this.contacts);
    });

    this.contactsService.getContactByID("1542753453899").valueChanges().subscribe(value => {
      let user = value;
      console.log("Get by ID ");
      console.log(user)
    });
  }

  ngOnInit() {
  }

}
