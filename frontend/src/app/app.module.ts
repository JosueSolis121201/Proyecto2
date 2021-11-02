import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { HomeComponent } from './components/home/home.component';
import { PieComponent } from './components/pie/pie.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearPostComponent } from './components/crear-post/crear-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    LogginComponent,
    HomeComponent,
    PieComponent,
    RegisterComponent,
    UsuarioComponent,
    PerfilComponent,
    CrearPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
