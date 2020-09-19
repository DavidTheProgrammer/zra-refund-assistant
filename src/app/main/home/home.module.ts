import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {DatabaseModule} from '../../database/database.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    CardModule,
    RoundProgressModule,
    DatabaseModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule {
}
