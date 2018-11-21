import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact;
  editID: string;

  constructor(private contactsService: ContactsService, private _route: ActivatedRoute, private router: Router) {
    // Se obtiene el ID del contacto a eliminar que viene en la URL
    this.editID = this._route.snapshot.paramMap.get('id');

    // Se obtiene el contacto a editar usando el metodo getContactByID(), espera
    // por parametro un ID, previamente obtenido por la URL
    this.contactsService.getContactByID(this.editID).valueChanges().subscribe((value: Contact) => {
      this.contact = value;
      console.log(this.contact);
    });

  }

  ngOnInit() {
  }

  // Este metodo se llama al hacer click en el boton Edit contact
  edit() {
    // Se espera recibir almenos un nombre y un numero de telefono
    if (!this.contact.firstName || !this.contact.phone) {
      return alert('You must enter a name and a phone number');
    }

    // Se usa el metodo editContact(), que recibe por parametro
    // un contacto, este contacto fue obtenido con su ID
    this.contactsService.editContact(this.contact).then(res => {
      // Si se ingresa acá el contacto fue eliminado exitosamente
      alert('The contact has been edited correctly');
      console.log(res);

      // Se redirige la pagina a /home
      this.router.navigate(['/home']);
    }).catch(err => {
      // Si se ingresa acá el contacto NO fue eliminado exitosamente
      alert('There was an error while editing the contact');
      console.error(err);
    });
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
