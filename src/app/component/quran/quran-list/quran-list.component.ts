import { Component, OnInit } from '@angular/core';
import { Sourate } from 'src/app/model/Sourate';
import { QuranService } from 'src/app/service/quran.service';

@Component({
  selector: 'app-quran-list',
  templateUrl: './quran-list.component.html',
  styleUrls: ['./quran-list.component.css']
})
export class QuranListComponent implements OnInit {

  sourates: Sourate[] = [];
  searchField: any = { englishName: '' };

  ngOnInit(): void {
    this.getSourates();
  }

  constructor(public quranSrv: QuranService){}

  getSourates(){
    this.quranSrv.getSourates()
    .then((data: Sourate[]) => {
      this.sourates = data;
      console.log(data);
      })
      .catch(() => { });
  }

}
