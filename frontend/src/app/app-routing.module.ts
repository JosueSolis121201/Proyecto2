import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { LogginComponent } from './components/loggin/loggin.component';

const routes: Routes = [
  
    {
      path: 'login',
      component: LogginComponent

    },
    {
      path: '**',
      component: ItemComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
