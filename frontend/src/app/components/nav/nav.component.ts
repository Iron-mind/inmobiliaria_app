import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  itemsInCart = 0;
  activeMenu= false
  constructor(private store:StoreService) { }

  ngOnInit(): void {
   
  }


}
