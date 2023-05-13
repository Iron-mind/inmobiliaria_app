import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field'; 

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import {HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SalesComponent } from './components/sales/sales.component';
import { MarkersComponent } from './components/markers/markers.component';
import { MarkformComponent } from './components/markform/markform.component';
import { MapComponent } from './components/map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReversePipe,
    ShortenTextPipe,
    HighlightDirective,
    HomeComponent,
    LoginComponent,
    SalesComponent,
    MarkersComponent,
    MarkformComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    // NoopAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
