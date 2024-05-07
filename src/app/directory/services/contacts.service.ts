import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GetcontactsInterface } from '../interfaces/getcontacts.interface';
import { UntypedFormGroup } from '@angular/forms';

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
  
  addContact( form: UntypedFormGroup ):Observable<any>{
     return this._http.post<any>(`${ this.url }/api/createContact`, form);
  }

  DeleteContact( form: UntypedFormGroup ):Observable<any>{
    return this._http.post<any>(`${ this.url }/api/deleteContact/`, form);
  }

  getContactbyId(contact_id:any){
    return this._http.get<GetcontactsInterface>(`${this.url}/api/getContactsbyId/${contact_id}`);
  }

  updateEmail(contact_id:any, form: any ):Observable<any>{
    console.log(form)
    return this._http.put<any>(`${this.url}/api/email/${contact_id}`,form);
    //return this._http.put<any>(`http://127.0.0.1:8000/api/email/56?email=k5akof@gmail.com`,form); 
  }

  updateAddress(contact_id:any, form: any ):Observable<any>{
    console.log(form)
    return this._http.put<any>(`${this.url}/api/address/${contact_id}`,form);
   
  }

  addphonetoContact(form: any ):Observable<any>{
    console.log(form);
    return this._http.post<any>(`${ this.url }/api/phone`, form);

  }

  addemailoContact(form: any ):Observable<any>{
    console.log(form);
    return this._http.post<any>(`${ this.url }/api/email`, form);

  }
}
