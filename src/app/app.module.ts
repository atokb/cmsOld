import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public contactId: string;
  public name: string;
  public email: string;
  public phone: string;
  public imageUrl: string;
  public group: string;

  constructor(contactId: string, name: string, email: string, phone: string, imageUrl: string, group: string) {
      this.contactId = contactId;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.imageUrl = imageUrl;
      this.group = group;
    }
}
