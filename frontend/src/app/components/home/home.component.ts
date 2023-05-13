import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  seccionActual: string = 'default'; 

  setSection(section: string) {
    this.seccionActual = section;
  }
  ngOnInit(): void {
  }

}
