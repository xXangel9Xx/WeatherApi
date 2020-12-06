import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; //importar rutas
import { WeaterComponentComponent } from './modules/weather/weater-component/weater-component.component'
import { WeatherModule } from './modules/weather/weather.module'
@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: WeaterComponentComponent},
    ]),
    BrowserModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
