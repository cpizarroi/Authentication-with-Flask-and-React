"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def create_new_user():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    is_active = False

    user=User(email=email, password=password, is_active=is_active)
    db.session.add(user)
    db.session.commit()
    response_body={
        "message": "all ok"
    }
    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def get_users():
     return jsonify([user.serialize() for user in User.query.all()]), 200


@api.route('/login', methods=['POST'])
def login_user():
    try:
        email = request.json.get("email")
        password = request.json.get("password")
        # Consulta la base de datos por el nombre de usuario y la contraseña
        user = User.query.filter_by(email=email, password=password).first()
        if User is None:
            # el usuario no se encontró en la base de datos
            return jsonify({"msg": "Bad email or password"}), 401
        
        # crea un nuevo token con el id de usuario dentro
        access_token = create_access_token(identity=user.id)
        # response_body={
        #     "message": "you are logged"
        # }
        return jsonify({ "token": access_token}), 200
    except Exception as e:
        return jsonify({"error": e}), 400

@api.route('/deleteuser/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user= User.query.filter_by(id=user_id).first()
    db.session.delete(user)
    db.session.commit()
    response_body={
        "message": "deleted user"
    }
    return jsonify(response_body), 200

    



@api.route('/private', methods=['POST'])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200