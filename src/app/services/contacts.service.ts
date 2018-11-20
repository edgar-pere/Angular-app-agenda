import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts:Contact[] = [
    {id: 1, firstName: "Jose1", lastName: "Padrón", gender: "male", age: 19, address: "Barcelona", phone: 4248022618},
    {id: 2, firstName: "Jose2", lastName: "Padrón", gender: "male", age: 19, address: "Barcelona", phone: 4248022618},
    {id: 3, firstName: "Jose3", lastName: "Padrón", gender: "male", age: 19, address: "Barcelona", phone: 4248022618},
    {id: 4, firstName: "Jose4", lastName: "Padrón", gender: "male", age: 19, address: "Barcelona", phone: 4248022618}
  ];

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  getContactByID(id) {
    let result = this.contacts.filter(contact => {
      return contact.id == id
    });

    return result;
  }
}
