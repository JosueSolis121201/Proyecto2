from functions.types import usuario
from .data import tabla_usuario
from .types.post import post
from .types.usuario import Usuario


def publicar_post(request):

    global tabla_usuario

    nombre_de_usuario = request.json["nombre_de_usuario"]
    type=request.json["type"]
    url=request.json["url"]
    date=request.json["date"]
    category=request.json["category"]
    cantidad_megusta=0
    nuevo_post = post(type,url,date,category,cantidad_megusta)

    for objeto in tabla_usuario:
        if(objeto.nombre_de_usuario==nombre_de_usuario):
            objeto.post_lst.append(nuevo_post)  
            return{
                    "estado":0,
                    "descripcion":"Se realizo el post",
                    "post":nuevo_post.serializar()
                }

    return {
                "estado":1,
                "descripcion":"No se pudo realizar el post"
            }




def ver_post(request):
    global tabla_usuario

    nombre_de_usuario = request.json["nombre_de_usuario"]

    for objeto in tabla_usuario:
        if(objeto.nombre_de_usuario==nombre_de_usuario):

            lista_serial = []
            for post in objeto.post_lst:
                lista_serial.append(post.serializar())

            return {
                "estado":0,
                "descripcion":"",
                "post_lst":lista_serial
            } 
            
def ver_usuario(request):
    global tabla_usuario

    lista_serial = []
    for usuario in tabla_usuario:
        lista_serial.append(usuario.serializar())

    return {
        "estado":0,
        "descripcion":"",
        "ver_usuario":lista_serial
     } 






    









    

