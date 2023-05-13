import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, defaultIfEmpty, map } from 'rxjs';
import { Marker } from '../../models/marker.model';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  seccionActual: string = 'info';
  addingMarker: boolean = false;
  private dataSubject: Subject<Marker[]> = new Subject<Marker[]>();
  markers$!: Observable<Marker[]>;
  constructor(
    private http: HttpClient
  ) { 
    this.markers$ = this.dataSubject.asObservable().pipe(
      map((markers) => {
        return markers;
      })
    )

  }
  

  setSection(section: string) {
    this.seccionActual = section;
    if(section === 'proyectos'){
      this.getMarker();
    }
  }

  addMarker() {
    this.addingMarker = true;
    
  }
  postMarker(marker: Marker) {
    this.http.post(environment.apiURL+'/marker', marker).subscribe((res) => {
      console.log(res);
      this.addingMarker = false;
      this.getMarker();
    })
  }
  getMarker() {
    //traer markers
    this.http.get<Marker[]>(environment.apiURL+'/marker').pipe(
      map((markers) => {
        this.dataSubject.next(markers);
        return markers;
      }
      )
    ).subscribe()
    
    
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
