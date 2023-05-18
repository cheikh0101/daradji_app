import { Injectable } from '@angular/core';
import { BaseClass } from '../model/Base-class';
import { DaradjiHttpService } from './daradji-http.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends BaseClass> {

  prefix ='';

  constructor(public http: DaradjiHttpService) { }

  findAll() {
    return this.http.get(this.prefix);
  }

  findOneById(id: number) {
    return this.http.get(this.prefix + '/' + id);
  }

  save(object: T) {
    return this.http.post(this.prefix, object);
  }
}
