export class Login {
  fname: string = '';
  mailId: string = '';
  password: string = '';
  static find: any;

  constructor(fname: string, mailId: string, password: string) {
    this.fname = fname;
    this.mailId = mailId;
    this.password = password;
  }
}
