import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() rowSelected = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.displayedColumns = [...this.columns, 'actions'];
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data;
  }

  selectRow(row: any): void {
    this.rowSelected.emit(row);
  }
}
