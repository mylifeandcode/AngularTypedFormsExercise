import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { AddCustomerCommand } from './add-customer-command';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerNumber: number = 0;

  constructor() { }

  public addCustomer(command: AddCustomerCommand): Observable<number> {
    
    const response$ = of(++this.customerNumber);
    const withDelay$ = response$.pipe(delay(2000)); //Simulate network delay

    return withDelay$;
  }
}
