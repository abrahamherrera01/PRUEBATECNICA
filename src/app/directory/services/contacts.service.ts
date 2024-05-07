import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GetcontactsInterface } from '../interfaces/getcontacts.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  url:string = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getContacts():Observable<GetcontactsInterface>{
    return this._http.get<GetcontactsInterface>(`${this.url}/api/getContacts`);
  }
}
