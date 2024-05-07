import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {

  public id!: string;
  showAddressField: boolean = false;
  showPhoneField: boolean = false;
  showEmailField: boolean = false;

  public data!:any;

  constructor(private route: ActivatedRoute,
    private _contactService:ContactsService,) {}



  toggleAddressField() {
    this.showAddressField = !this.showAddressField;
  }

  togglePhoneField() {
    this.showPhoneField = !this.showPhoneField;
  }

  toggleEmail() {
    this.showEmailField = !this.showEmailField;
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

   this.getContactbyId();
  }



  getContactbyId(){
    this._contactService.getContactbyId(this.id).subscribe({
      next: ({ data, code, status }) => {
        if( code === 200 && status == "success" ){ 

          this.data=data
          console.log(this.data)
          }          
      },
      error: ( error ) => {
        console.log( error );
      }
    })
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

  update(valor:any,id:any,category:any){

     if(category== "address"){
      const form={address: valor}
      this._contactService.updateAddress(id,form).subscribe({
        next: ({ data, code, status }) => {
 
          if(  status == "success" ){ 
  
            console.log("se actualizo")
            }          
        },
        error: ( error ) => {
          console.log( error );
        }
      });
     }
    if(category == "phone"){
      const form={phone: valor}
      this._contactService.updatephone(id,form).subscribe({
        next: ({ data, code, status }) => {
          if(  status == "success" ){ 
            console.log("actualizado")
          }          
        },
        error: ( error ) => {
          console.log( error );
        }
      });
    }
    if(category== "email"){

      const form={email: valor}
      this._contactService.updateEmail(id,form).subscribe({
        next: ({ data, code, status }) => {
          if(  status == "success" ){ 
            console.log("actualizado")
          }          
        },
        error: ( error ) => {
          console.log( error );
        }
      });


    }
    if(category== "lastname"){
      console.log("Se movio en lastname")
    }
    if(category== "name"){
      console.log("Se movio en name")
    }

  }

  
  addphonetoContact(form: NgForm) {
 
    Swal.fire({
      title: "¿Decea añadir un nuevo telefono?",
      showCancelButton: true,
      confirmButtonText: "si"
    }).then((result) => {
      if (result.isConfirmed) {        
        console.log(form.value)

        this._contactService.addphonetoContact(form.value).subscribe(
          (resp) => {
            if (resp.status === "success") {
              Swal.fire("telefono almacenado correctamente!", "", "success");
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


  addemailtoContact(form: NgForm) {
 
    Swal.fire({
      title: "¿Decea añadir un nuevo email?",
      showCancelButton: true,
      confirmButtonText: "si"
    }).then((result) => {
      if (result.isConfirmed) {        
        console.log(form.value)

        this._contactService.addemailoContact(form.value).subscribe(
          (resp) => {
            if (resp.status === "success") {
              Swal.fire("email almacenado correctamente!", "", "success");
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

  addeaddresstoContact(form: NgForm) {
 
    Swal.fire({
      title: "¿Decea añadir un nuevo email?",
      showCancelButton: true,
      confirmButtonText: "si"
    }).then((result) => {
      if (result.isConfirmed) {        
        console.log(form.value)

        this._contactService.addaddressContact(form.value).subscribe(
          (resp) => {
            if (resp.status === "success") {
              Swal.fire("email almacenado correctamente!", "", "success");
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
