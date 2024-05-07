import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MainComponent } from './main/main.component';

 
const routes:Routes=[
    {path: 'add', component: AddContactComponent},
    {path: 'contacts', component: MainComponent},
    { path: '**', redirectTo: 'contact' },

]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
 
})
export class DirectoryRoutingModule { }
