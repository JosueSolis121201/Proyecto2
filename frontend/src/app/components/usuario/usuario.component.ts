import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { responsePost } from 'src/app/models/user';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  postForm:any ;
  listadoPost:any[] =[];

  usuarioActual:any = {}
  

  constructor(private router: Router,private registerService:RegisterService,
    private formBuilder: FormBuilder,private toastr: ToastrService,
    private _sanitizer: DomSanitizer) {
    }

  
  ngOnInit(): void {
    
    this.usuarioActual = JSON.parse(localStorage.getItem('usuario')|| "{}");
    this.verposts()
  }

  verposts(){

    let jsonPost = this.usuarioActual;




    this.registerService.post_usuario(jsonPost).subscribe(
      (response:any)=>{ 


        

        this.listadoPost = response.post_lst;
        
        this.listadoPost.map((item:any)=>{
          if(item.type!="imagen"){
           item.url = this._sanitizer.bypassSecurityTrustResourceUrl(item.url);
          }
        })
        console.log(this.listadoPost)
      },(error)=>{
        console.log({err:error})
      }
      

      );
    }
  
  

  public navegar(ruta:any){
    this.router.navigateByUrl(ruta);
  }

}
