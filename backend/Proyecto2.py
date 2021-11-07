from flask import Flask, jsonify,request 
from flask.wrappers import Request
from functions.auth import login,register
from functions.usuario import modificar_usuario
from functions.post import publicar_post,ver_post,ver_usuario


from flask_cors import CORS




app = Flask (__name__)
CORS(app)

@app.route('/',methods=['GET'])
def defau():
    return jsonify({"api":"202001574"})

@app.route('/login', methods=['POST'])
def loginRoute():
    response = login(request)
    return(jsonify(response))

@app.route('/register', methods=['POST'])
def registerRoute():
    response = register(request)
    return(jsonify(response))

@app.route('/usuario', methods=['POST'])
def modifyUser():
    response = modificar_usuario(request)
    return(jsonify(response))

@app.route('/crear_post', methods=['POST'])
def crear_postRoute():
    response = publicar_post(request)
    return(jsonify(response))

@app.route('/ver_post', methods=['POST'])
def ver_postRoute():
    response = ver_post(request)
    return(jsonify(response))

@app.route('/ver_usuario', methods=['POST'])
def ver_usuarioRoute():
    response = ver_usuario(request)
    return(jsonify(response))






if __name__ == '__main__':
     app.run(debug=True, port=4000)



