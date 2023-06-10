import { Component } from '@angular/core';

export interface PeriodicElement {
  type: string;
  clicks: number;
  status: number | null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { type: 'Hydrogen', clicks: 1.0079, status: 2.15 },
  { type: 'Helium', clicks: 4.0026, status: 3.17 },
  { type: 'Lithium', clicks: 6.941, status: 66 },
  { type: 'Beryllium', clicks: 9.0122, status: null },
  { type: 'Boron', clicks: 10.811, status: null },
];

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css'],
})
export class NetworksComponent {
  displayedColumns: string[] = ['type', 'clicks', 'status'];
  dataSource = ELEMENT_DATA;
  hasNullValue(row: any): boolean {
    return row.status == null;
  }
}
