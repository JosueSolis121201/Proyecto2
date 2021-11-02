import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any ;

  constructor(private registerService:RegisterService,private formBuilder: FormBuilder,private toastr: ToastrService) { 
    this.createForm();
  }

  createForm(){
    this.registerForm = this.formBuilder.group({
      nombre:'',
      genero:'',
      correo_electronico: '',
      password:'',
      nombre_de_usuario: ''
    })
  }




  ngOnInit() {
    
   
  }


  crearUsuario(){
    let form:FormGroup = this.registerForm; 
    let jsonUsuario = form.value;

    let pass:string = jsonUsuario.password

    if(pass.length < 8){
      this.toastr.warning("Password es demasiada pequenia","Advertencia")
      return;
    }

    this.registerService.register(jsonUsuario).subscribe(
      (response:any)=>{
        let estado = response.estado
        if(estado==0){
          this.toastr.success("Usuario creado","Realizado")
        }else{
          this.toastr.error("Usuario no se pudo crear","Error")
        }
        
      },(error)=>{
        this.toastr.error("Usuario no se pudo crear","Error")
      }

    );

  }

}
