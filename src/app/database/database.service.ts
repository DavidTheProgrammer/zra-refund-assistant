import {Injectable} from '@angular/core';

import * as low from 'lowdb';
import * as LocalStorage from 'lowdb/adapters/LocalStorage';
import {IDBSchema} from './database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public db: low.LowdbSync<IDBSchema>;

  constructor() {
    const adapter = new LocalStorage<IDBSchema>('database');
    this.db = low(adapter);

    // Set some defaults
    this.db.defaults<IDBSchema>({
      auth: {
        isLoggedIn: false,
      }
    }).write();
  }
}
