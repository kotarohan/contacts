import { ContactService } from '../../shared/contact.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  myVar1 = false;
  constructor(private service: ContactService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      ContactId: 0,
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      Status: true

     
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.ContactId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postContact().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Contact Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putContact().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Contact Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
