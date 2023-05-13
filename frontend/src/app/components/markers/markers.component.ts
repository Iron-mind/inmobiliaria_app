import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  seccionActual: string = 'info';
  addingMarker: boolean = false;
  constructor(
    private http: HttpClient
  ) { }
  map!: Map;
  loadMap() {
    
    
    this.map = new Map('map').setView([3.4408,-76.5201], 13);
    tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(this.map)
    if(this.map){
      this.getMarker();
    }
    
  }

  setSection(section: string) {
    this.seccionActual = section;
    if (section === 'proyectos') {
      if(!this.map) this.loadMap();
    }

  }

  addMarker() {
    this.addingMarker = true;
    
  }

  getMarker() {
    //traer markers
    this.http.get('http://localhost:3003/api/marker').subscribe((data: any) => {
      console.log(data);
      
        data.forEach((mark: any) => {
          marker([mark.latitude, mark.longitude]).addTo(this.map)
            .bindPopup(mark.description)
            .openPopup();
        });
      

    });
  }
  ngOnInit(): void {
    
   
  }

  ngAfterViewInit() {

  }
}
