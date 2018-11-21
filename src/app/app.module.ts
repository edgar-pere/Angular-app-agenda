import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

const appRoutes: Routes = [
  {path: '', component: ViewContactComponent},
  {path: 'home', component: ViewContactComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'edit-contact/:id', component: EditContactComponent},
  {path: 'delete-contact/:id', component: DeleteContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ViewContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
