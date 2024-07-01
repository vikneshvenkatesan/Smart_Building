import {AfterViewInit, Component, OnInit, ViewChild, inject, signal} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

export interface Customer {
  no: number;
  accountName: string;
  contactName: string;
  buildings: string;
  createdDate: Date;
  officialLocation: string;
  status: string;
  image: string;
}
const CUSTOMER_DATA: Customer[] = [
  {
    "no": 1,
    "accountName": "Oliver Barnes",
    "contactName": "Aimée",
    "buildings": "Building A, Building BC, Building DF",
    "createdDate": new Date('2021-06-15'),
    "officialLocation": "760 Sugar Lane Woodside, NY 11377",
    "status": "Active",
    "image": "assets/Ellipse 28.png"
  },
  {
    "no": 2,
    "accountName": "Evelyn Smith",
    "contactName": "Liam",
    "buildings": "Building E, Building G, Building H",
    "createdDate": new Date('2022-03-10'),
    "officialLocation": "123 Maple Street Brooklyn, NY 11201",
    "status": "Inactive",
    "image": "assets/Ellipse 29.png"
  },
  {
    "no": 3,
    "accountName": "Jackson Miller",
    "contactName": "Sophia",
    "buildings": "Building X, Building Y, Building Z",
    "createdDate": new Date('2020-08-25'),
    "officialLocation": "456 Elm Street Queens, NY 11385",
    "status": "Active",
    "image": "assets/Ellipse 30.png"
  },
  {
    "no": 4,
    "accountName": "Ava Johnson",
    "contactName": "Noah",
    "buildings": "Building P, Building Q, Building R",
    "createdDate": new Date('2021-12-05'),
    "officialLocation": "789 Oak Street Bronx, NY 10463",
    "status": "Pending",
    "image": "assets/Ellipse 31.png"
  },
  {
    "no": 5,
    "accountName": "Lucas Brown",
    "contactName": "Emma",
    "buildings": "Building M, Building N, Building O",
    "createdDate": new Date('2019-11-22'),
    "officialLocation": "101 Pine Street Staten Island, NY 10301",
    "status": "Active",
    "image": "assets/Ellipse 32.png"
  },
  {
    "no": 6,
    "accountName": "Isabella Davis",
    "contactName": "James",
    "buildings": "Building D, Building E, Building F",
    "createdDate": new Date('2023-01-15'),
    "officialLocation": "202 Birch Street Manhattan, NY 10001",
    "status": "Inactive",
    "image": "assets/Ellipse 33.png"
  },
  {
    "no": 7,
    accountName: "Mason Martinez",
    "contactName": "Olivia",
    "buildings": "Building J, Building K, Building L",
    "createdDate": new Date('2021-07-30'),
    "officialLocation": "303 Cedar Street Harlem, NY 10027",
    "status": "Active",
    "image": "assets/Ellipse 34.png"
  },
  {
    "no": 8,
    "accountName": "Sophia Anderson",
    "contactName": "William",
    "buildings": "Building U, Building V, Building W",
    "createdDate": new Date('2022-04-18'),
    "officialLocation": "404 Spruce Street East Village, NY 10009",
    "status": "Pending",
    "image": "assets/Ellipse 35.png"
  },
  {
    "no": 9,
    "accountName": "Michael Wilson",
    "contactName": "Mia",
    "buildings": "Building G, Building H, Building I",
    "createdDate": new Date('2020-10-12'),
    "officialLocation": "505 Maple Avenue Chelsea, NY 10011",
    "status": "Active",
    "image": "assets/Ellipse 36.png"
  },
  {
    "no": 10,
    "accountName": "Mia Martinez",
    "contactName": "Ethan",
    "buildings": "Building A, Building B, Building C",
    "createdDate": new Date('2019-09-01'),
    "officialLocation": "606 Willow Avenue Tribeca, NY 10013",
    "status": "Inactive",
    "image": "assets/Ellipse 37.png"
  }
]

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements AfterViewInit,OnInit{
  readonly dialog = inject(MatDialog);
element: any;
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
    
  }

  displayedColumns: string[] = ['no', 'accountName', 'contactName', 'buildings', 'createdDate', 'officialLocation', 'status', 'action'];
  dataSource = new MatTableDataSource<Customer>(CUSTOMER_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  edit(element: Customer) {
    // Edit logic here
  }

  delete(element: Customer) {
    // Delete logic here
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '600px',
      height: '600px'
    });
  }
}

