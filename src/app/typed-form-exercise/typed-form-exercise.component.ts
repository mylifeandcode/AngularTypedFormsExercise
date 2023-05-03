import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AddCustomerCommand } from '../add-customer-command';
import { finalize } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface ICustomerForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  address1: FormControl<string>;
  address2: FormControl<string | null>;
  city: FormControl<string>;
  state: FormControl<string>;
  postalCode: FormControl<string>;
  emailAddress: FormControl<string>;
  phone: FormControl<string>;
  phoneExt: FormControl<number | null>
}

@Component({
  selector: 'app-typed-form-exercise',
  templateUrl: './typed-form-exercise.component.html',
  styleUrls: ['./typed-form-exercise.component.scss']
})
export class TypedFormExerciseComponent {

  public saving: boolean = false;
  public customerForm: FormGroup<ICustomerForm>;

  constructor(
    private _customerService: CustomerService,
    formBuilder: FormBuilder) {
      this.customerForm = this.buildForm(formBuilder);
  }

  public submitForm(): void {
    this.saving = true;
    this._customerService
      .addCustomer(new AddCustomerCommand())
      .pipe(finalize(() => this.saving = false))
      .subscribe((id: number) => window.alert(id));
  }

  private buildForm(formBuilder: FormBuilder): FormGroup<ICustomerForm> {
    return formBuilder.group<ICustomerForm>({
        firstName: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        lastName: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        address1: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        address2: new FormControl<string | null>(null),
        city: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        state: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        postalCode: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        emailAddress: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
        phone: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        phoneExt: new FormControl<number | null>(null)
      }
    );
  }

  private getAddCustomerCommand(): AddCustomerCommand {
    const command = new AddCustomerCommand();
    return command;
  }

}
