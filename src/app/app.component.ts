import {Component, OnInit} from '@angular/core';
import {DatabaseService} from './database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'refund-tracker';

  constructor(private dbService: DatabaseService) {
  }

  ngOnInit(): void {
  }

}
