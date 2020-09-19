import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sidebarOpen: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  openSidenav(): void {
    this.sidebarOpen = true;
  }
}
