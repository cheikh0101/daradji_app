import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuranService } from 'src/app/service/quran.service';

@Component({
  selector: 'app-quran-show',
  templateUrl: './quran-show.component.html',
  styleUrls: ['./quran-show.component.css']
})
export class QuranShowComponent implements OnInit {

  sourateInformations: any;

  constructor(public http: QuranService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findSourate();
  }

  findSourate() {
    this.http.getAyaahOfSourates(this.activatedRoute.snapshot.params["number"])
      .then((data: any) => {
        this.sourateInformations = data;
      })
      .catch(() => { })
  }
}
