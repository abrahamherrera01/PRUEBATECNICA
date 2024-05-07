import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  showAddressField: boolean = false;
  showPhoneField: boolean = false;
  showEmailField: boolean = false;
 
  constructor(private _contactService:ContactsService,){

  }
 


  toggleAddressField() {
    this.showAddressField = !this.showAddressField;
  }

  togglePhoneField() {
    this.showPhoneField = !this.showPhoneField;
  }

  toggleEmail() {
    this.showEmailField = !this.showEmailField;
  }

  onSubmit(form: NgForm) {
 
    Swal.fire({
      title: "¿Decea crear un nuevo Contacto?",
      showCancelButton: true,
      confirmButtonText: "si"
    }).then((result) => {
      if (result.isConfirmed) {        
        console.log(form.value.name)

        this._contactService.addContact(form.value).subscribe(
          (resp) => {
            if (resp.status === "success") {
              Swal.fire("contacto: "+ resp.contact.name +" "+ resp.contact.lastname +" almacenado correctamente!", "", "success");
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
