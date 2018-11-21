import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";
import {AngularFireDatabase} from 'angularfire2/database';

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

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getContacts() {
    return this.angularFireDatabase.list('/contacts');
  }

  getContactByID(id) {
    return this.angularFireDatabase.object(`/contacts/${id}`);
  }

  editContact(contact) {
    return this.angularFireDatabase.object(`/contacts/${contact.id}`).update(contact);
  }

  addContact(contact:Contact) {
    return this.angularFireDatabase.object(`/contacts/${contact.id}`).set(contact);
  }

  deleteContact(id) {
    return this.angularFireDatabase.database.ref().child(`/contacts/${id}`).remove();
  }
}
