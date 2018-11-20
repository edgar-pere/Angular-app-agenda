import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';

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

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (!this.firstName || !this.phone) {
      return alert("You must enter a name and a phone number");
    }

    this.contact = {
      id: Date.now(),
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      age: this.age,
      address: this.address,
      phone: this.phone
    }

    console.log(this.contact);
  }

}
