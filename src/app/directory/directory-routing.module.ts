import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MainComponent } from './main/main.component';

 
const routes:Routes=[
    { path: '**', redirectTo: 'contact' },
    {path: 'add', component: AddContactComponent},
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
