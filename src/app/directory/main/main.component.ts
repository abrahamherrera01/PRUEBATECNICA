import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { AddContactComponent } from '../add-contact/add-contact.component';
 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public data!:any
  public selectedContact: any;


  constructor(private _contactService:ContactsService,
  
    ){
    this.getContacts();
  }

  

  getContacts(){
    this._contactService.getContacts().subscribe({
      next: ({ data, code, status }) => {
        if( code === 200 && status == "success" ){ 
          
      
          this.data=data

          console.log(data)

  
         
        }          
      },
      error: ( error ) => {
        console.log( error );
      }
    })
  }    


  showContactDetails(contact:any) {
    this.selectedContact = contact; 

    console.log(this.selectedContact);

   }

 

}