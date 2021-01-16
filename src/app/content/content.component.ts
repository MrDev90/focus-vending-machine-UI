import { Component, OnInit } from '@angular/core';
import { Customer } from '../_entities/customer.model';
import { CustomerService } from '../_services/customer.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  custList: Customer  
  dataSource = ELEMENT_DATA;
  OrderNo

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];  

  constructor(private _custservice: CustomerService) { }

  ngOnInit() {
    this._custservice.getCustomerList().subscribe(res => {
      console.log(res)
      this.custList = res;
    });
    this.OrderNo = Math.floor(100000 + Math.random() * 900000).toString();
  }

  onSubmitOrder(){
    console.log("there you go biches!!!!");
    OrderNo: Math.floor(100000 + Math.random() * 900000).toString();
  }

}
