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

  loginForm:any ;


  constructor(private registerService:RegisterService,private formBuilder: FormBuilder,
    private router: Router,private toastr: ToastrService) { 
    this.createForm();
    }

    createForm(){
      this.loginForm = this.formBuilder.group({
        nombre:'',
        genero:'',
        correo_electronico:'',
        password:'',
        nombre_de_usuario:'',
        nombre_de_usuario_viejo:'',

      })
    }
  ngOnInit(): void {
  }

  public navegar(ruta:any){
    this.router.navigateByUrl(ruta);
  }



}




