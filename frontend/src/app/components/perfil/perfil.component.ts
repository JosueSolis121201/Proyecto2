import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { RegisterService } from 'src/app/services/register/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilForm:any ;


  constructor(private registerService:RegisterService,private formBuilder: FormBuilder,
    private router: Router,private toastr: ToastrService) { 
    this.createForm();
    }

    createForm(){
      this.perfilForm = this.formBuilder.group({
        nombre:'',
        genero:'',
        correo_electronico:'',
        password:'',
        nombre_de_usuario:'',
        nombre_de_usuario_viejo:''


      })
    }
  ngOnInit(): void {

    
  }

  public navegar(ruta:any){
    this.router.navigateByUrl(ruta);
  }

  editar_perfil(){
    let form:FormGroup = this.perfilForm; 
    let jsonUsuario = form.value;
    let hola= JSON.parse(localStorage.getItem('usuario') || "{}");

    
    jsonUsuario.nombre_de_usuario_viejo =hola.nombre_de_usuario
    console.log(hola)
    this.registerService.editar_usuario(jsonUsuario).subscribe(
      (response:any)=>{
        console.log(response)
        console.log({est:response})

        let estado:number = response.estado;

        if(estado==0){
          hola.nombre_de_usuario=jsonUsuario.nombre_de_usuario
          
          console.log("Se Edito")

          localStorage.setItem('usuario',JSON.stringify(hola))
          this.toastr.success("perfil editado","Realizado")

          this.router.navigateByUrl("usuario");
        }else{
          
          this.toastr.error("no se pudo editar perfil","Error")
        }
      },(error)=>{
        console.log({err:error})
      }

    );

  }
}




