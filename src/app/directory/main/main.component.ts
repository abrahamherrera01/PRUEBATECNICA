import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
  
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

   deleteContact(form: NgForm){

    Swal.fire({
      title: "Desea eliminar este Contacto?",
      showCancelButton: true,
      confirmButtonText: "si"
    }).then((result) => {
      if (result.isConfirmed) {        
      
        console.log(form.value)

        this._contactService.DeleteContact(form.value).subscribe(
          (resp) => {
            if (resp.status === "success") {
              Swal.fire("contacto eliminado correctamente!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            } else {
              Swal.fire(resp.message != undefined ? resp.message : resp.errors != undefined && resp.errors.length > 0 ? resp.errors[0] : 'Ocurrió un problema', "", "error");
            }
          }              
        );  
      }
    });
   }
 

}