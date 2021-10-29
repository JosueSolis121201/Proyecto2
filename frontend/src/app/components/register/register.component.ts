import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any ;

  constructor(private registerService:RegisterService,private formBuilder: FormBuilder) { 
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




  ngOnInit(): void {
  }


  crearUsuario(){
    let form:FormGroup = this.registerForm; 
    let jsonUsuario = form.value;

    this.registerService.register(jsonUsuario).subscribe(
      (response:any)=>{
        
      },(error)=>{
        console.log({err:error})
      }

    );

  }

}
