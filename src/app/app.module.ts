import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClockComponent } from './clock/clock.component';
import { MyclockComponent } from './clock/myclock/myclock.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ClockComponent, MyclockComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
