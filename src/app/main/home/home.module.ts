import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

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
    RouterModule.forChild(routes),
  ]
})
export class HomeModule {
}
