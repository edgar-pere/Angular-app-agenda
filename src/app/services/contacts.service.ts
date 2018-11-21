import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  // Se obtienen todos los contactos existentes en la BD firebase
  getContacts() {
    return this.angularFireDatabase.list('/contacts');
  }

  // Se obtiene un contacto en espefico, se espera por parametro un ID
  // para ubicar el contacto
  getContactByID(id) {
    return this.angularFireDatabase.object(`/contacts/${id}`);
  }

  // Se edita un contacto existente, se espera por parametro un objeto contacto, de el se saca el ID
  // para saber que registro modificar, y se asigna el objeto recibido por parametro
  editContact(contact: Contact) {
    return this.angularFireDatabase.object(`/contacts/${contact.id}`).update(contact);
  }

  // Se añade un nuevo contacto, se espera por parametro un objeto contacto
  // se obtiene su ID para indicarle a firebase el ID del nuevo registro, y se
  // asigna el objeto recibido por por parametro
  addContact(contact: Contact) {
    return this.angularFireDatabase.object(`/contacts/${contact.id}`).set(contact);
  }

  // Se elimina un contacto existente, se espera por parametro un ID, para
  // saber que regristro se debe borrar
  deleteContact(id) {
    return this.angularFireDatabase.database.ref().child(`/contacts/${id}`).remove();
  }
}
