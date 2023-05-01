import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AddCustomerCommand } from '../add-customer-command';
import { finalize } from 'rxjs';

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
  }

}
