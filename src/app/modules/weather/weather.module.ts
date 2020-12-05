import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaterComponentComponent } from './weater-component/weater-component.component';
import { RouterModule } from '@angular/router'; //importar rutas


@NgModule({
  imports: [CommonModule],
  declarations: [WeaterComponentComponent],
  exports:[WeaterComponentComponent]
})
export class WeatherModule { }
