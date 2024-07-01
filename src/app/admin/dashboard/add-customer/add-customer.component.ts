import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerComponent } from '../customer/customer.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { state } from '@angular/animations';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  customerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    private toastr: ToastrService
  ) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      createdDate: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zipcode: ['',Validators.required],
      status: ['',Validators.required]
    });
  }

  onSave() {
    this.submitted = true;
   
    if (this.customerForm.valid) {
      this.toastr.success('Create Successfully');
      this.dialogRef.close();
    } else {
      this.toastr.error('Please fill all required fields correctly.', 'Error');
    }
  }

  closeDialog() {
    this.dialogRef.close();
    this.customerForm.reset();
    this.submitted = false;
  }

  get f() {
    return this.customerForm.controls;
  }
}
