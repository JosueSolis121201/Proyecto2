from flask import Flask, jsonify,request 
from flask.wrappers import Request
from functions.auth import login,register
from functions.usuario import modificar_usuario

from flask_cors import CORS




app = Flask (__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def loginRoute():
    response = login(request)
    return(jsonify(response))

@app.route('/register', methods=['POST'])
def registerRoute():
    response = register(request)
    return(jsonify(response))

@app.route('/usuario', methods=['PUT'])
def modifyUser():
    response = modificar_usuario(request)
    return(jsonify(response))






if __name__ == '__main__':
     app.run(debug=True, port=4000)



