import { Component, Input, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { Observable } from 'rxjs';
import { Marker } from '../../models/marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: Map;
  @Input() markers!: Observable<Marker[]>;
  constructor() { }

  ngOnInit(): void {
   this.loadMap();
  }

  ngOnChanges() {
    
  }
  loadMap() {


    this.map = new Map('map').setView([3.4408, -76.5201], 13);
    tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(this.map)
    if (this.map) {
      // this.getMarker();
    }

  }

  ngAfterViewInit() {
    if (this.map) {
      this.markers?.subscribe((markers) => {
        console.log('estan llegando',markers);
        markers.forEach((mark: any) => {
          const m = marker([mark.latitude, mark.longitude]).addTo(this.map);
          m.bindPopup(mark.description);
        })
      }
      )
    }
  }

}
