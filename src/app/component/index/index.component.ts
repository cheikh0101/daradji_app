import { Component, OnInit } from '@angular/core';
import { Khassida } from 'src/app/model/Khassida';
import { KhassidaService } from 'src/app/service/khassida.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  khassidas: Khassida[] = [];
  searchField: any = { name: '' };

  constructor(public khassidaSrv: KhassidaService) { }

  ngOnInit(): void {
    this.getKhassidas();
  }

  getKhassidas(){
    this.khassidaSrv.getKhassidas()
    .then((data: Khassida[]) => {
      this.khassidas = data;
      })
      .catch(() => { });
  }

}
