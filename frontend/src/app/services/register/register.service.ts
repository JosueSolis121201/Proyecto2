import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { userLogin, newUser, post_usuario,editar_perfil } from 'src/app/models/user';
import {ip} from '../common'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(private http: HttpClient) { }

  public register(usuario:newUser){
    return this.http.post(ip+"/register",usuario);
  }


  public login(usuario:userLogin){
    return this.http.post(ip+"/login",usuario);
  }

  public post_usuario(usuario:post_usuario){
    return this.http.post(ip+"/ver_post",usuario);
  }

  public editar_usuario(usuario:editar_perfil){
    return this.http.post(ip+"/modifyUser",usuario);
  }
}
