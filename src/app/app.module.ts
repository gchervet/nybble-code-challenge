import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvViewComponent } from './inv-view/inv-view.component';
import { InvLoadComponent } from './inv-load/inv-load.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'  
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InvViewComponent,
    InvLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
