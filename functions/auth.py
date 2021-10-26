from .data import tabla_usuario
from .types.usuario import Usuario

def login(request):
    global tabla_usuario
    nombre_de_usuario=request.json["nombre_de_usuario"]
    password=password = request.json["password"]
    for objeto in tabla_usuario:
        if objeto.nombre_de_usuario==nombre_de_usuario:
            if objeto.password==password:
                return{
                    "estado":0,
                    "descripcion":"",
                    "usuario":objeto.serializar()
                }

    return {
                "estado":1,
                "descripcion":"nombre o password incorrectos"
            }
        
        
    

def register(request):
    global tabla_usuario
    nombre = request.json["nombre"]
    genero = request.json["genero"]
    nombre_usuario = request.json["nombre_de_usuario"]
    correo_electronico = request.json["correo_electronico"]
    password = request.json["password"]
    nuevo_usuario = Usuario(nombre,genero,nombre_usuario,correo_electronico,password)
    
    for objeto in tabla_usuario:

        if objeto.nombre_de_usuario==nombre_usuario:
             return {
                "estado":1,
                "descripcion":"ya existe ese nombre de usuario"
            }
    tabla_usuario.append(nuevo_usuario)
    return {    "usuario":nuevo_usuario.serializar(),
                "estado":0,
                "descripcion":""
            }
    

  
          
    






   
    
    
   
   





