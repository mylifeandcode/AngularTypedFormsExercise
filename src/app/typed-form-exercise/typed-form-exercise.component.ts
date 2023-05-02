import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AddCustomerCommand } from '../add-customer-command';
import { finalize } from 'rxjs';
import { FormControl } from '@angular/forms';

interface CustomerForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  address1: FormControl<string>;
  address2: FormControl<string|null>;
  city: FormControl<string>;
  state: FormControl<string>;
  postalCode: FormControl<string>;
  emailAddress: FormControl<string>;
}

@Component({
  selector: 'app-typed-form-exercise',
  templateUrl: './typed-form-exercise.component.html',
  styleUrls: ['./typed-form-exercise.component.scss']
})
export class TypedFormExerciseComponent {

  public saving: boolean = false;

  constructor(private _customerService: CustomerService) {

  }

  public submitForm(): void {
    this.saving = true;
    this._customerService
      .addCustomer(new AddCustomerCommand())
      .pipe(finalize(() => this.saving = false))
      .subscribe((id: number) => window.alert(id));
  }

}
