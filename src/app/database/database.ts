export interface IAuth {
  isLoggedIn: boolean;
}


export interface IDBSchema {
  auth: IAuth;
}
