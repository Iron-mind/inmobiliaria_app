import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
interface Sale {
  name: string;
  description: string;
  value: number;
  createdAt: string;
}
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  seccionActual: string = 'info';

  items$!: Observable<Sale[]> ;
   
  displayedColumns: string[] = ['name', 'value', 'description', 'createdAt'];
  constructor(
    private http: HttpClient
  ) { }
  setSection(section: string) {
    this.seccionActual = section;
  }
  ngOnInit(): void {
    this.items$ = this.http.get<Sale[]>('http://localhost:3003/api/sale');
    this.items$.subscribe(items => {
      return items;
    });
  }

}
