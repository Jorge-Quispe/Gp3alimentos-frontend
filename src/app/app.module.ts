import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './modules/login/login-component/login-component.component';
import { SolicitudComponentComponent } from './modules/solicitud/solicitud-component/solicitud-component.component';
import { ReporteComponent } from './modules/solicitud/reporte/reporte.component';
import { MonitoreoComponentComponent } from './modules/monitoreo/monitoreo-component/monitoreo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SolicitudComponentComponent,
    ReporteComponent,
    MonitoreoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
