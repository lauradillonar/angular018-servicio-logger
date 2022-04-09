import { BebidaModule } from './bebida/bebida.module';
import { ComidaModule } from './comida/comida.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComidaModule,
    BebidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
