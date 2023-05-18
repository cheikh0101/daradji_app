import { Injectable } from '@angular/core';
import { Khassida } from '../model/Khassida';
import { BaseService } from './base.service';
import { DaradjiHttpService } from './daradji-http.service';

@Injectable({
  providedIn: 'root'
})
export class KhassidaService extends BaseService<Khassida> {

  constructor(public override http: DaradjiHttpService) {
    super(http);
  }

  url: string = 'http://127.0.0.1:8000/api/';

  getKhassidas() {
    return this.http.get(this.url + 'khassidas');
  }

  getBayiteOfKhassidas(id: number) {
    return this.http.get(this.url + 'khassidas/' + id);
  }

  getLangues() {
    return this.http.get(this.url + 'langues');
  }

  sendContact(contact: object) {
    return this.http.post(this.url+'contact/sendMessage',contact);
  }
}
