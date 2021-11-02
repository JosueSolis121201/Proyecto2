

class Usuario:
    def __init__(self,nombre,genero,nombre_de_usuario,correo_electronico,password):
        self.nombre = nombre
        self.genero = genero
        self.password = password
        self.nombre_de_usuario = nombre_de_usuario
        self.correo_electronico = correo_electronico
        self.post_lst = []



    def serializar(self):

        lista_serial = []
        for usuario in self.post_lst:
            lista_serial.append(usuario.serializar())

        


        return {
            "nombre":self.nombre,
            "genero":self.genero,
            "password":self.password,
            "nombre_de_usuario":self.nombre_de_usuario,
            "correo_electronico":self.correo_electronico,
            "post_lst": lista_serial
        }

   


        




       

        
    

