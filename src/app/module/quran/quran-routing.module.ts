import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuranListComponent } from 'src/app/component/quran/quran-list/quran-list.component';
import { QuranShowComponent } from 'src/app/component/quran/quran-show/quran-show.component';

const routes: Routes = [
  { path: '', component: QuranListComponent },
  {path:':number/details', component:QuranShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuranRoutingModule { }
