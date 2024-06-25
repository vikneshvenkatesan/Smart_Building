import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
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

  navigate() {
    // console.log('coming');
    this.router.navigate(['auth', 'forgot'])
  }
}
