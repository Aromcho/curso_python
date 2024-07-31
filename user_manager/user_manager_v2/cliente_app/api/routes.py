from flask import Blueprint, request, jsonify
from cliente_app.models.cliente import Cliente

bp = Blueprint('api', __name__)
users = {}

@bp.route('/')
def index():
    return "API de Gestión de Clientes"

@bp.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']
    edad = request.form['edad']
    
    if username in users:
        return jsonify({'error': 'Usuario ya existe'}), 400
    else:
        new_user = Cliente(username, password, email, int(edad))
        users[username] = new_user
        return jsonify({'success': 'Usuario registrado'}), 200

@bp.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username in users and users[username].verificar_password(password):
        return jsonify({'message': 'Inicio de sesión exitoso.'}), 200
    else:
        return jsonify({'message': 'Usuario o contraseña incorrectos.'}), 400

@bp.route('/users', methods=['GET'])
def get_users():
    user_list = {username: str(user) for username, user in users.items()}
    return jsonify(user_list), 200

@bp.route('/compras', methods=['POST'])
def agregar_compra():
    username = request.form['username']
    producto = request.form['producto']
    if username in users:
        users[username].agregar_compra(producto)
        return jsonify({'success': 'Producto agregado a las compras'}), 200
    else:
        return jsonify({'error': 'Usuario no encontrado'}), 400

@bp.route('/compras/<username>', methods=['GET'])
def mostrar_compras(username):
    if username in users:
        compras = users[username].mostrar_compras()
        return jsonify({'compras': compras}), 200
    else:
        return jsonify({'error': 'Usuario no encontrado'}), 400
