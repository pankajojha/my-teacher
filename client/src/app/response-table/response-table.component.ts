import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ResponseTableDataSource } from './response-table-datasource';

@Component({
  selector: 'response-table',
  templateUrl: './response-table.component.html',
  styleUrls: ['./response-table.component.css']
})
export class ResponseTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ResponseTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['selectId','id', 'name'];

  ngOnInit() {
    this.dataSource = new ResponseTableDataSource(this.paginator, this.sort);
  }
}
