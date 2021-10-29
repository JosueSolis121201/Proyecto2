import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  loginForm:any ;

  constructor(private registerService:RegisterService,private formBuilder: FormBuilder,private router: Router) { 
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
          console.log("Loggeado")
        }else{
          console.log("Error contra")
        }
      },(error)=>{
        console.log({err:error})
      }

    );

  }
}
