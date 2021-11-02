import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearPostComponent } from './components/crear-post/crear-post.component';

const routes: Routes = [
  
    {
      path: 'login',
      component: LogginComponent

    },
    {
      path: 'perfil',
      component: PerfilComponent

    },
    {
      path: 'crear_post',
      component: CrearPostComponent

    },
    {
      path: 'usuario',
      component: UsuarioComponent

    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: '**',
      component: HomeComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
