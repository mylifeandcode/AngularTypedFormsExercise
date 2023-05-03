import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { AddCustomerCommand } from './add-customer-command';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerNumber: number = 0;

  constructor() { }

  public addCustomer(command: AddCustomerCommand): Observable<number> {
    if (!this.isAddCustomerCommandValid(command))
      return throwError(() => "Command is invalid.");

    const response$ = of(++this.customerNumber);
    const withDelay$ = response$.pipe(delay(2000)); //Simulate network delay

    return withDelay$;
  }

  private isAddCustomerCommandValid(command: AddCustomerCommand): boolean {
    //Simple validation for example only
    return command.firstName.trim() != ''
      && command.lastName.trim() != ''
      && command.address1.trim() != ''
      && command.city.trim() != ''
      && command.state.trim() != ''
      && command.postalCode.trim() != ''
      && command.emailAddress.trim() != ''
      && command.phoneNumber.trim() != '';
  }
}
