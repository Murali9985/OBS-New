import { NotificationComponent } from './toastr-notification/toastr-notification.component';
import { NotificationService } from './toastr-notification/toastr-notification.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
