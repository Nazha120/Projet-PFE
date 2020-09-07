export interface IAccount {
  username?: string;
  password?: string;
  email?: string;
  roles?: Array<any>;
}

export class Account implements IAccount {
  constructor(public username?: string, public password?: string, public email?: string, public roles?: Array<any>) {


  }
}
