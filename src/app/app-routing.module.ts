import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { IndexComponent } from './component/index/index.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { KhassidaComponent } from './module/khassida/khassida.component';
import { QuranComponent } from './module/quran/quran.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'khassida',
    component: KhassidaComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./module/khassida/khassida.module').then((m) => m.KhassidaModule),
      },
    ],
  },
  {
    path: 'quran',
    component: QuranComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./module/quran/quran.module').then((m) => m.QuranModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
