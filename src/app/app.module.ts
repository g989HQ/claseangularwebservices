import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfesorComponent } from '../profesor/profesor.component';
import{HttpClientModule} from '@angular/common/http';
import { VerdurasComponent } from './verduras/verduras.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    VerdurasComponent
    //FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
