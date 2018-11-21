import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  // contact:Contact;
  contact;
  editID;

  constructor(private contactsService: ContactsService, private _route: ActivatedRoute, private router: Router) {
    this.editID = this._route.snapshot.paramMap.get('id');

    this.contactsService.getContactByID(this.editID).valueChanges().subscribe((value: Contact) => {
      this.contact = value;
      console.log(this.contact);
    });

  }

  ngOnInit() {
  }

  edit() {
    if (!this.contact.firstName || !this.contact.phone) {
      return alert("You must enter a name and a phone number");
    }

    this.contactsService.editContact(this.contact).then(res => {
      alert("The contact has been edited correctly");
      console.log(res);
      this.router.navigate(['/home']);
    }).catch(err => {
      alert("There was an error while editing the contact");
      console.error(err);
    })
  }

  empty() {
    this.contact.firstName = null;
    this.contact.lastName = null;
    this.contact.gender = null;
    this.contact.age = null;
    this.contact.address = null;
    this.contact.phone = null;
  }
}
