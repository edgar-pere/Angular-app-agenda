import { TestBed, inject, async } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AppModule } from '../app.module';
import { Contact } from '../interfaces/contact';

describe('ContactsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: []
    })
    .compileComponents();
  }));

  it('should be created', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return contacts', inject([ContactsService], (service: ContactsService) => {
    service.getContacts().valueChanges().subscribe((value: Contact[]) => {
      const contacts = value;
      expect(contacts).toBeTruthy();
    });
  }));

  it('should return contactByID', inject([ContactsService], (service: ContactsService) => {
    service.getContactByID('1542822170093').valueChanges().subscribe((value: Contact) => {
      const contact = value;
      expect(contact).toBeTruthy();
    });
  }));

  it('should add new contact', inject([ContactsService], (service: ContactsService) => {
    let works = false;
    const contact = {
      id: Date.now(), // Se usa como ID la fecha en la que se creo el contacto
      firstName: 'testing from jasmine and karma',
      lastName: null,
      gender: null,
      age: null,
      address: null,
      phone: 123
    };

    service.addContact(contact).then(() => {
      works = true;
      expect(works).toBeTruthy();
    });
  }));

  it('should delete a contact', inject([ContactsService], (service: ContactsService) => {
    let works = false;
    const contact_delete = {
      id: Date.now(), // Se usa como ID la fecha en la que se creo el contacto
      firstName: 'This contact will be deletedd',
      lastName: null,
      gender: null,
      age: null,
      address: null,
      phone: 123
    };

    service.addContact(contact_delete).then(() => {
      service.deleteContact(contact_delete.id).then(() => {
        works = true;
        expect(works).toBeTruthy();
      });
    });
  }));

});
