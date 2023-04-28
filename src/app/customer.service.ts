import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCustomerCommand } from './add-customer-command';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public addCustomer(command: AddCustomerCommand): Observable<number> {
    
  }
}
