import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuranRoutingModule } from './quran-routing.module';
import { QuranComponent } from './quran.component';
import { QuranListComponent } from '../../component/quran/quran-list/quran-list.component';
import { QuranShowComponent } from '../../component/quran/quran-show/quran-show.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuranComponent,
    QuranListComponent,
    QuranShowComponent
  ],
  imports: [
    CommonModule,
    QuranRoutingModule,
    FilterPipeModule,
    FormsModule
  ]
})
export class QuranModule { }
