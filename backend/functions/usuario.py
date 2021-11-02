from .data import tabla_usuario
from .types.usuario import Usuario

def modificar_usuario (request):
    global tabla_usuario

    nombre = request.json["nombre"]
    genero = request.json["genero"]
    correo_electronico = request.json["correo_electronico"]
    password = request.json["password"]
    nombre_de_usuario = request.json["nombre_de_usuario"]
    nombre_de_usuario_viejo = request.json["nombre_de_usuario_viejo"]

    if(nombre_de_usuario != nombre_de_usuario_viejo):
        for objeto in tabla_usuario:
            if nombre_de_usuario == objeto.nombre_de_usuario:
                return { 
                    "estado":1,
                    "descripcion":"Error usuario repetido"
                } 


    for objeto in tabla_usuario:
        if objeto.nombre_de_usuario==nombre_de_usuario_viejo:
            objeto.nombre = nombre
            objeto.genero = genero
            objeto.correo_electronico = correo_electronico
            objeto.password = password
            objeto.nombre_de_usuario = nombre_de_usuario  

            return 
            { 
                "usuario":objeto,
                "estado":0,
                "descripcion":""
            }
         
    return { 
            "estado":1,
            "descripcion":"No se encontro usuario"
            }


    
        




