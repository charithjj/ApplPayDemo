import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WindowRef } from './WindowRef';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
