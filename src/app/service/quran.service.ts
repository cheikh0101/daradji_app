import { Injectable } from '@angular/core';
import { Sourate } from '../model/Sourate';
import { BaseService } from './base.service';
import { DaradjiHttpService } from './daradji-http.service';

@Injectable({
  providedIn: 'root'
})
export class QuranService extends BaseService<Sourate> {

  constructor(public override http: DaradjiHttpService) {
    super(http);
  }

  url: string = 'http://api.alquran.cloud/v1/surah';

  getSourates() {
    return this.http.get(this.url);
  }

  getAyaahOfSourates(id: number) {
    return this.http.get(this.url + '/' + id);
  }
}
