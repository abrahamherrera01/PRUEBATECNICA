import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  {
    path:'contact',
    loadChildren:() => import('./directory/directory.module').then(m=>m.DirectoryModule)
  },
  { path: '**', redirectTo: 'contact' }
];

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
