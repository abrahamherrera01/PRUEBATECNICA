import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoryModule } from './directory/directory.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectoryModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
    ],
    exports:[
      MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
