import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes
import { MainComponent } from './main/main.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DirectoryRoutingModule } from './directory-routing.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UpdateContactComponent } from './update-contact/update-contact.component';

 
@NgModule({
  declarations: [
    MainComponent,
    AddContactComponent,
    UpdateContactComponent,
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    MatInputModule,
    FormsModule
    
  ],
  exports: [
    MainComponent,
    MatInputModule
  ]
})
export class DirectoryModule { }
