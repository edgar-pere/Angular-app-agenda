import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  // Se espera recibir un array que contenga a los contactos en forma de objeto
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {
    // Se obtienen todos los contactos que existen actualmente en la BD firebase
    this.contactsService.getContacts().valueChanges().subscribe((value: Contact[]) => {
      this.contacts = value;
    });
  }

  ngOnInit() {
  }

}
