import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {
  contact: Contact;
  deleteID: string;

  constructor(private contactsService: ContactsService, private _route: ActivatedRoute, private router: Router) {
    // Se obtiene el ID del contacto a eliminar que viene en la URL
    this.deleteID = this._route.snapshot.paramMap.get('id');

    // Se obtiene el contacto a eliminar usando el metodo getContactByID(), espera
    // por parametro un ID, previamente obtenido por la URL
    this.contactsService.getContactByID(this.deleteID).valueChanges().subscribe((value: Contact) => {
      this.contact = value;
      console.log(this.contact);
    });
  }

  ngOnInit() {
  }

  // Este metodo se llama al hacer click en el boton Delete contact
  delete() {
    // Pide confirmacion al hacer click en el boton Delete contact
    const sure = confirm('Are you sure to eliminate this contact? This action can not be reversed');
    // Si se acepta la confirmación se procede a eliminar el contacto
    if (sure) {

      // Se usa el metodo deleteContact(), que recibe por parametro
      // un contacto, este contacto fue obtenido con su ID
      this.contactsService.deleteContact(this.deleteID).then(res => {
        // Si se ingresa acá el contacto fue eliminado exitosamente
        alert('Contact successfully removed');

        // Se redirige la pagina a /home
        this.router.navigate(['/home']);
      }).catch(err => {
        // Si se ingresa acá el contacto NO fue eliminado exitosamente
        alert('There was an error deleting the contact');
        console.error(err);
      });
    }
  }

}
