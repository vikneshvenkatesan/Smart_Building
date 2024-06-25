import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {

  formGroup!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      this.toastr.error('Please fill in the form correctly.', 'Form Error');
      return
    }
    this.router.navigate(['/dashboard']);
    this.toastr.success('Login Successfully');
  }
}
