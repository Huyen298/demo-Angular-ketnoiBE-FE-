import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AnimalComponent } from './animal.component';
import { ListComponent } from './animal/list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateComponent } from './animal/create/create.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EditComponent } from './animal/edit/edit.component';
import { DeleteComponent } from './animal/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
