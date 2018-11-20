import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {
  contact:Contact;
  deleteID;

  constructor(private contactsService: ContactsService, private _route: ActivatedRoute) {
    this.deleteID = this._route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactByID(this.deleteID)[0];
    console.log(this.deleteID);
  }

  ngOnInit() {
  }

  delete(){
    return console.log(this.deleteID);
  }

}
