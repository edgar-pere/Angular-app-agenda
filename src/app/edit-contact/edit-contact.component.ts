import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact:Contact;
  editID;

  constructor(private contactsService: ContactsService, private _route: ActivatedRoute) {
    this.editID = this._route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactByID(this.editID)[0];
    console.log(this.contact);
  }

  ngOnInit() {
  }

  edit() {
    if (!this.contact.firstName || !this.contact.phone) {
      return alert("You must enter a name and a phone number");
    }

    console.log(this.contact);
  }

}
