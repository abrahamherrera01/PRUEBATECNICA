import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes
import { MainComponent } from './main/main.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DirectoryRoutingModule } from './directory-routing.module';

 
@NgModule({
  declarations: [
    MainComponent,
    AddContactComponent,
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule
    
  ],
  exports: [
    MainComponent
  ]
})
export class DirectoryModule { }
