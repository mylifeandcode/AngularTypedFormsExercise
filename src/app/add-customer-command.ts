export class AddCustomerCommand {
  public firstName: string;
  public lastName: string;
  public address1: string;
  public address2?: string;
  public city: string;
  public state: string;
  public postalCode: string;
  public emailAddress: string;
  public phoneNumber: number;
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
    this.phoneNumber = 0;
    this.birthDate = new Date();
  }
}
