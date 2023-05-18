import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhassidaRoutingModule } from './khassida-routing.module';
import { KhassidaComponent } from './khassida.component';
import { KhassidaShowComponent } from '../../component/khassida/khassida-show/khassida-show.component';
import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  declarations: [
    KhassidaComponent,
    KhassidaShowComponent
  ],
  imports: [
    CommonModule,
    KhassidaRoutingModule,
    QrCodeModule
  ]
})
export class KhassidaModule { }
