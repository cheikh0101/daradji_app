import { Component } from '@angular/core';
import { KhassidaService } from 'src/app/service/khassida.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  constructor( public khassidaSrv: KhassidaService) { }

  contact = {
    name: "",
    email: "",
    objet: "",
    message: ""
  };

  save() {
    this.khassidaSrv.sendContact(this.contact)
      .then(() => {
        this.khassidaSrv.http.toastr.success("Message envoyé avec succès");
      })
      .catch(() => {
      });
  }

}
