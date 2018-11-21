import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {
  // contact:Contact;
  contact
  deleteID;

  constructor(private contactsService: ContactsService, private _route: ActivatedRoute, private router: Router) {
    this.deleteID = this._route.snapshot.paramMap.get('id');
    this.contactsService.getContactByID(this.deleteID).valueChanges().subscribe((value: Contact) => {
      this.contact = value;
      console.log(this.contact);
    });
    console.log(this.deleteID);
  }

  ngOnInit() {
  }

  delete(){
    let sure = confirm("Are you sure?");
    if (sure) {
      this.contactsService.deleteContact(this.deleteID).then(res => {
        alert("Success");
        this.router.navigate(['/home']);
      }).catch(err => {
        alert("Error");
        console.error(err);
      });
    }
  }

}
