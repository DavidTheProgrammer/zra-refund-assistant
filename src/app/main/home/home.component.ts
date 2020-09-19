import {Component, OnInit} from '@angular/core';
import {DateTime} from 'luxon';
import {DatabaseService} from '../../database/database.service';
import {IMonthlyQuota, IRefundMonthlyAmounts} from '../../database/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  refundMonth: Date;
  minDate: Date;
  maxDate: Date;

  progressBarInfo: IMonthlyQuota;
  refundAmount: IRefundMonthlyAmounts;

  constructor(private dbService: DatabaseService) {
  }

  ngOnInit(): void {
    this.refundMonth = DateTime.utc()
                               .toJSDate();

    this.minDate = DateTime.fromFormat('01/08/2020', 'dd/MM/yyyy')
                           .toJSDate();

    this.maxDate = this.refundMonth;


    // Get this month's info
    this.loadRefundMonthData(this.refundMonth);

  }

  loadRefundMonthData(date: Date): void {
    const monthAndYear = DateTime.fromJSDate(date)
                                 .toFormat('MM/yyyy');

    this.progressBarInfo = this.dbService.db
                               .get('quotas')
                               .find({monthAndYear})
                               .value();

    this.refundAmount = this.dbService.db
                            .get('refundAmounts')
                            .find({monthAndYear})
                            .value();

  }

  updateDetails(): void {
    setTimeout(() => {
      this.loadRefundMonthData(this.refundMonth);
    }, 250);
  }
}
