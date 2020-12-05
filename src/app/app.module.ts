import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; //importar rutas
import { WeatherModule } from './modules/weather/weather.module'
@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    WeatherModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
