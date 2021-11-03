export class newUser{
    nombre: string = '';
    genero:string = '';
    correo_electronico:string = '';
    password:string = '';
    nombre_de_usuario:string = '';
}

export class userLogin{
    nombre_de_usuario: string = '';
    password:string = '';

}

export class responseUser{
    estado: number = 0;
    descripcion:string = '';
    usuario?:newUser;
}

export class responsePost{
    nombre: string = '';
    genero:string = '';
    correo_electronico:string = '';
    password:string = '';
    nombre_de_usuario:string = '';
    post_lst:post_usuario[]=[];
}


export class posts{
    type:string='';
    url:string='';
    date:string='';
    category:string='';
    cantidad_megusta:number=0;

}

export class post_usuario{
    nombre_de_usuario:string = '';
    
}

export class editar_perfil{

    nombre: string = '';
    genero:string = '';
    correo_electronico:string = '';
    password:string = '';
    nombre_de_usuario:string = '';
    nombre_de_usuario_viejo:string = '';

}