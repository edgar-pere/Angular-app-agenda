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

  // Campos de el formulario
  firstName:string;
  lastName:string;
  gender:string;
  age:number;
  address:string;
  phone:number;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  // Este metodo se llama al hacer click en el boton Add new contact
  add() {
    // Se espera recibir almenos un nombre y un numero de telefono
    if (!this.firstName || !this.phone) {
      return alert("You must enter a name and a phone number");
    }

    // Se arma el contacto que se agregará a firebase
    this.contact = {
      id: Date.now(), // Se usa como ID la fecha en la que se creo el contacto
      firstName: this.firstName,
      lastName: this.lastName || null,
      gender: this.gender || null,
      age: this.age || null,
      address: this.address || null,
      phone: this.phone
    }

    console.log(this.contact);

    // Se conecta con el servicio y usa el metodo addContact, se le pasa por
    // parametro el contacto que se acaba de armar
    this.contactsService.addContact(this.contact).then(res => {
      // Se ingresa acá si el contacto se agregó correctamente

      alert("Successfully added contact");
      console.log(res);

      // Se limpian los campos del formulario
      this.empty();

    }).catch(err => {
      // Se ingresa acá si el contacto NO se agregó correctamente
      alert("There was an error adding the contact");
      console.error(err);
    });
  }

  // Metodo para limpiar el formulario
  empty() {
    this.firstName = null;
    this.lastName = null;
    this.gender = null;
    this.age = null;
    this.address = null;
    this.phone = null;
  }
}
