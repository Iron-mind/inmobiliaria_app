import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  onSubmit() {
    console.log(this.myForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
