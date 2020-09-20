import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  sidebarOpen: boolean;

  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Purchase',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: 'new-purchase',
            command: (event => this.closeSidenav())
          },
          {
            label: 'Refund Claim',
            icon: 'pi pi-fw pi-money-bill',
            command: (event => this.closeSidenav())
          }
        ]
      },
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
        command: (event => this.closeSidenav())
      },

      {
        label: 'History',
        icon: 'pi pi-fw pi-list',
        command: (event => this.closeSidenav())
      }
    ];
  }

  openSidenav(): void {
    this.sidebarOpen = true;
  }

  closeSidenav(): void {
    this.sidebarOpen = false;
  }
}
