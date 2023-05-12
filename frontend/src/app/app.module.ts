import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ImgComponent } from './components/img/img.component';
import { NavComponent } from './components/nav/nav.component';
import {HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component'
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    NavComponent,
    ReversePipe,
    ShortenTextPipe,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
