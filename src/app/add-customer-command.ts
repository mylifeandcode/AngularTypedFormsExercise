export class AddCustomerCommand {
  public firstName: string;
  public lastName: string;
  public address1: string;
  public address2?: string;
  public city: string;
  public state: string;
  public postalCode: string;
  public emailAddress: string;
  public phoneNumber: string;
  public phoneExtension?: number;
  public birthDate: Date;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.address1 = '';
    this.city = '';
    this.state = '';
    this.postalCode = '';
    this.emailAddress = '';
    this.phoneNumber = '';
    this.birthDate = new Date();
  }
}
