import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:Contact;
  firstName:string;
  lastName:string;
  gender:string;
  age:number;
  address:string;
  phone:number;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  add() {
    if (!this.firstName || !this.phone) {
      return alert("You must enter a name and a phone number");
    }

    this.contact = {
      id: Date.now(),
      firstName: this.firstName,
      lastName: this.lastName || null,
      gender: this.gender || null,
      age: this.age || null,
      address: this.address || null,
      phone: this.phone
    }

    console.log(this.contact);
    this.contactsService.addContact(this.contact).then(res => {
      alert("Successfully added contact");
      console.log(res);

      this.empty();

    }).catch(err => {
      alert("There was an error adding the contact");
      console.error(err);
    });
  }

  empty() {
    this.firstName = null;
    this.lastName = null;
    this.gender = null;
    this.age = null;
    this.address = null;
    this.phone = null;
  }
}
