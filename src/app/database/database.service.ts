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
        },
        quotas: [
          {
            monthAndYear: '08/2020',
            quotas: {
              beer: {
                max: 5_000,
                current: 1_032,
                unit: 'Bottles'
              },
              cigarettes: {
                max: 2_000,
                current: 1_224,
                unit: 'Sticks',
              },
              spirits: {
                max: 100,
                current: 100,
                unit: 'Bottles'
              },
              wine: {
                max: 300,
                current: 280,
                unit: 'Litres'
              }
            }
          },
          {
            monthAndYear: '09/2020',
            quotas: {
              beer: {
                max: 5_000,
                current: 2_150,
                unit: 'Bottles'
              },
              cigarettes: {
                max: 2_000,
                current: 1_433,
                unit: 'Sticks',
              },
              spirits: {
                max: 100,
                current: 63,
                unit: 'Bottles'
              },
              wine: {
                max: 300,
                current: 50,
                unit: 'Litres'
              }
            }
          }
        ],
        refundAmounts: [
          {
            monthAndYear: '08/2020',
            amount: '8,550.02'
          },
          {
            monthAndYear: '09/2020',
            amount: '5,500.43'
          }
        ]
      }
    ).write();
  }
}
