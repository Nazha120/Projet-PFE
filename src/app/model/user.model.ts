export interface IUser{

   username?:string;
   password?:string;
}
export class User implements IUser{
  constructor(public username?: string,public password?:string) {
     this.username=username;
     this.password=password;
  }
}
