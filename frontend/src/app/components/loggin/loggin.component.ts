import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  loginForm:any ;

  constructor(private registerService:RegisterService,private formBuilder: FormBuilder,
    private router: Router,private toastr: ToastrService) { 
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      nombre_de_usuario:'',
      password:'',
    })
  }
  ngOnInit(): void {
  }



  crearUsuario(){
    let form:FormGroup = this.loginForm; 
    let jsonUsuario = form.value;
    this.registerService.login(jsonUsuario).subscribe(
      (response:any)=>{
        let estado:number = response.estado;
        if(estado==0){
          localStorage.setItem('usuario',JSON.stringify(response.usuario))

          //VARAIBLEAGUARDAR = JSON.parse(localStorage.getItem('usuario's));
          this.router.navigateByUrl("usuario");
          this.toastr.success("Usuario loggeado","Realizado")

        }else{
          
          this.toastr.error("Usuario no se pudo acceder","Error")
        }
      },(error)=>{
        console.log({err:error})
      }

    );

  }
}
