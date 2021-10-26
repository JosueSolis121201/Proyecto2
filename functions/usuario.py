from .data import tabla_usuario
from .types.usuario import Usuario

def modificar_usuario (request):
    global tabla_usuario

    nombre = request.json["nombre"]
    genero = request.json["genero"]
    correo_electronico = request.json["correo_electronico"]
    password = request.json["password"]
    nombre_de_usuario = request.json["nombre_de_usuario"]
    nombre_de_usuario_nuevo = request.json["nombre_de_usuario_nuevo"]

    #doble comprobacion

    
    usuario_modoficado = Usuario(nombre,genero,nombre_de_usuario,correo_electronico,password)

    for objeto in tabla_usuario:
        
        if objeto.nombre_de_usuario==nombre_de_usuario:

            return {
                "estado":0,
                "descripcion":""
            }
    
    return {    "usuario":usuario_modoficado.serializar(),
                "estado":1,
                "descripcion":""
            }


    
        




