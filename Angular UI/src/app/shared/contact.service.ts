import { Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  formData: Contact;
   readonly rootURL = 'http://rohancontactsapp.azurewebsites.net/api';
 // readonly rootURL = 'http://localhost:5000/api';
  list : Contact[];

  constructor(private http: HttpClient) { }

  postContact() {
    return this.http.post(this.rootURL + '/Contacts', this.formData);
  }
  putContact() {
    return this.http.put(this.rootURL + '/Contacts/' + this.formData.ContactId, this.formData);
  }
  deleteContact(id) {
    return this.http.delete(this.rootURL + '/Contacts/' + id);
  }

  refreshList(){
    
    this.http.get(this.rootURL + '/contacts')
    .toPromise()
    .then(res => this.list = res as Contact[]);

    debugger;
  }
}
