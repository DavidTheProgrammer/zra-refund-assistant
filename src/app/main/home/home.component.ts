import {Component, OnInit} from '@angular/core';
import {DateTime} from 'luxon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  refundMonth: Date;
  minDate: Date;

  constructor() {
  }

  ngOnInit(): void {
    this.refundMonth = DateTime.utc()
                               .toJSDate();

    this.minDate = DateTime.fromFormat('01/03/2020', 'dd/MM/yyyy')
                           .toJSDate();
  }

}
