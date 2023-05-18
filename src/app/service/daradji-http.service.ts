import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaradjiHttpService {

  // prefixUrl = 'http://127.0.0.1:8000/api/';

  constructor(public http: HttpClient, public injector: Injector, private ngxService: NgxUiLoaderService) { }

  public get toastr(): ToastrService{
    return this.injector.get(ToastrService);
  }
  public get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ngxService.start();
      this.http.get(url)
        .pipe(first())
        .subscribe({
          next: (response: any) => {
            if (response.error) {
              if (response.validationError) {
                response.data.forEach((error: any) => {
                  this.toastr.error(error[0]);
                });
                reject({ validationError: true, data: response.data });
              } else {
                this.toastr.error(response.data);
                reject({ validationError: false, data: response.data });
              }
            } else {
              resolve(response.data);
            }
          }, error: (err) => {
            if(err.status!=401) {
              this.toastr.error(err.error.message, "Erreur");
            }
            reject({ validationError: true, data: err.error });
          }
        });
      this.ngxService.stop();
    });
  }
  public post(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ngxService.start();
      this.http.post( url, data)
        .pipe(first())
        .subscribe({
          next: (response: any) => {
            if (response.error) {
              if (response.validationError) {
                Object.values(response.data).forEach((error: any) => {
                  this.toastr.error(error[0]);
                });
                reject({ validationError: true, data: response.data });
              } else {
                this.toastr.error(response.data);
                reject({ validationError: false, data: response.data });
              }
            } else {
              resolve(response.data);
            }
          }, error: (err) => {
            this.toastr.error(err.error.message, "Erreur");
            reject({ validationError: false, data: err.error });
          }
        });
    });
    this.ngxService.stop();
  }
  public put(url: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put( url, data)
        .pipe(first())
        .subscribe({
          next: (response: any) => {
            if (response.error) {
              if (response.validationError) {
                Object.values(response.data).forEach((error: any) => {
                  this.toastr.error(error[0]);
                });
                reject({ validationError: true, data: response.data });
              } else {
                this.toastr.error(response.data);
                reject({ validationError: false, data: response.data });
              }
            } else {
              resolve(response.data);
            }
          }, error: (err) => {
            this.toastr.error(err.error.message, "Erreur");
            reject({ validationError: false, data: err.error });
          }
        });
    });
  }
  public delete(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete( url)
        .pipe(first())
        .subscribe({
          next: (response: any) => {
            if (response.error) {
              this.toastr.error(response.data);
              reject({ validationError: false, data: response.data });
            } else {
              resolve(response.data);
            }
          }, error: (err) => {
            this.toastr.error(err.error.message, "Erreur");
            reject({ validationError: false, data: err.error });
          }
        });
    });
  }
}
