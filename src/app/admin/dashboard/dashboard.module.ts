import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular.material';
import { GoogleMapsModule } from '@angular/google-maps';
import { IndexComponent } from './index/index.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    IndexComponent,
    CustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
