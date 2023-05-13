import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Marker } from '../../models/marker.model';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-markform',
  templateUrl: './markform.component.html',
  styleUrls: ['./markform.component.scss']
})
export class MarkformComponent implements OnInit {
  myForm = new FormGroup({
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  @Output() setMarker = new EventEmitter<Marker>()
  
  onSubmit() {
    this.setMarker.emit(this.myForm.value as unknown as Marker);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
