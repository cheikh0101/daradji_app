import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhassidaShowComponent } from 'src/app/component/khassida/khassida-show/khassida-show.component';

const routes: Routes = [
  {path:':id/details', component:KhassidaShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhassidaRoutingModule { }
