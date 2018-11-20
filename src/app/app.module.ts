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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
