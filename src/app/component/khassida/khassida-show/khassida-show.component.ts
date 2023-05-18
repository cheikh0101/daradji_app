import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from 'src/app/model/Base-class';
import { Bayite } from 'src/app/model/Bayite';
import { Langue } from 'src/app/model/Langue';
import { BaseService } from 'src/app/service/base.service';
import { KhassidaService } from 'src/app/service/khassida.service';

@Component({
  selector: 'app-khassida-show',
  templateUrl: './khassida-show.component.html',
  styleUrls: ['./khassida-show.component.css']
})
export class KhassidaShowComponent implements OnInit {

  bayites: Bayite[] = [];
  langues: Langue[] = [];
  khassidaName: string = "";
  khassidaId: number = 0;

  constructor( public http: KhassidaService, public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.findKhassida();
    this.getLangues();
  }

  findKhassida() {
    this.http.getBayiteOfKhassidas(this.activatedRoute.snapshot.params["id"])
      .then((data: any) => {
        this.khassidaName = data[0].khassida.name;
        this.khassidaId = data[0].khassida_id;
        this.bayites = data;
      })
      .catch(() => { })
  }

  getLangues() {
     this.http.getLangues()
      .then((data: any) => {
        this.langues = data;
      })
      .catch(() => { })
  }
}
