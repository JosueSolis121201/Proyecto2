import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit { 

  selected:string ='';

  crear_postForm:any ;


  constructor(private registerService:RegisterService,private formBuilder: FormBuilder,
    private router: Router,private toastr: ToastrService) { this.createForm();}

    createForm(){
      this.crear_postForm = this.formBuilder.group({
        type:'',
        url:'',
        category:''
      })
    }



  ngOnInit(): void {
    
  }

  public navegar(ruta:any){
    this.router.navigateByUrl(ruta);
  }

  crearPost(){
    let form:FormGroup = this.crear_postForm; 
    let jsonUsuario = form.value;
    let hola= JSON.parse(localStorage.getItem('usuario') || "{}");

    let myDate = new Date();
    
    
    jsonUsuario.nombre_de_usuario =hola.nombre_de_usuario
    jsonUsuario.type=this.selected

    
    jsonUsuario.date = "Fecha :"+myDate.getDay()+" / "+myDate.getMonth()+" / "+myDate.getFullYear()+" Hora "+
    myDate.getHours()+":"+myDate.getMinutes()
  
    this.registerService.crear_post(jsonUsuario).subscribe(

      (response:any)=>{
        console.log(response)
        console.log({est:response})
        let estado:number = response.estado;
        if(estado==0){
          
          this.toastr.success("post publicado","Realizado")
          console.log({hola:this.selected})
          this.router.navigateByUrl("usuario");

          


        }else{
          
          this.toastr.error("no se pudo publicar post","Error")
        }
      },(error)=>{
        console.log({err:error})
      }

    );

  }


}
