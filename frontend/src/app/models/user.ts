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