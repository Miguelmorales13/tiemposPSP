import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TiemposPSPComponent } from './components/tiempos-psp/tiempos-psp.component';
import { DefectosComponent } from './components/defectos/defectos.component';
import { TiemposPSPService } from "./services/tiempos-psp.service";
import { DefectosService } from "./services/defectos.service";
import { OrdenDefectosPipe } from './pipes/orden-defectos.pipe';
import { DefectosPipe } from './pipes/defectos.pipe';
import { OrdenTiemposPipe } from './pipes/orden-tiempos.pipe';
import { CuentaDefectosCorregidosPipe } from './pipes/cuenta-defectos-corregidos.pipe';
import { TotalTiempoPipe } from './pipes/total-tiempo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TiemposPSPComponent,
    DefectosComponent,
    OrdenDefectosPipe,
    DefectosPipe,
    OrdenTiemposPipe,
    CuentaDefectosCorregidosPipe,
    TotalTiempoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TiemposPSPService, DefectosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
