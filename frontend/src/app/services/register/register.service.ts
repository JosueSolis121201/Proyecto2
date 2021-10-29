import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { userLogin, newUser } from 'src/app/models/user';
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
}
