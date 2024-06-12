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
  @Input() showActions: boolean = true; // Nuevo input para mostrar o no las acciones
  @Output() rowSelected = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.setupColumns();
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.setupColumns();
    this.dataSource.data = this.data;
  }

  setupColumns(): void {
    this.displayedColumns = this.columns;
    if (this.showActions) {
      this.displayedColumns = [...this.columns, 'actions'];
    }
  }

  selectRow(row: any): void {
    this.rowSelected.emit(row);
  }
}
