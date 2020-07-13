import { Contact } from '../../shared/contact.model';
import { ContactService } from '../../shared/contact.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  constructor(private service: ContactService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Contact) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(ContactId) {
    if (confirm('Are you sure to delete this record ?')) {
      debugger;
      this.service.deleteContact(ContactId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Contact Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
