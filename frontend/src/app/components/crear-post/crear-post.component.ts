import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navegar(ruta:any){
    this.router.navigateByUrl(ruta);
  }
}
