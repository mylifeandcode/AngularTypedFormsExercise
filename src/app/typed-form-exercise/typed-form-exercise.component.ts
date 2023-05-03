import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AddCustomerCommand } from '../add-customer-command';
import { catchError, finalize } from 'rxjs';
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
    const command = this.getAddCustomerCommand();
    this._customerService
      .addCustomer(command)
      .pipe(
        catchError((error: string) => { 
          window.alert('ERROR: ' + error); 
          throw error;
        }),
        finalize(() => this.saving = false))
      .subscribe((id: number) => window.alert("Customer saved. New ID id " + id));
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
    command.firstName = this.customerForm.controls.firstName.value;
    command.lastName = this.customerForm.controls.lastName.value;
    command.address1 = this.customerForm.controls.address1.value;

    if (this.customerForm.controls.address2.value)
      command.address2 = this.customerForm.controls.address2.value;

    command.city = this.customerForm.controls.city.value;
    command.state = this.customerForm.controls.state.value;
    command.postalCode = this.customerForm.controls.postalCode.value;
    command.emailAddress = this.customerForm.controls.emailAddress.value;
    command.phoneNumber = this.customerForm.controls.phone.value;

    if (this.customerForm.controls.phoneExt.value)
      command.phoneExtension = this.customerForm.controls.phoneExt.value;

    return command;
  }

}
