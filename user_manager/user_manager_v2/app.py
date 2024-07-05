from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

users = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    if username in users:
        return jsonify({'error': 'Usuario ya existe'}), 400
    else:
        users[username] = password
        return jsonify({'success': 'Usuario registrado'}), 200
    
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username in users and users[username] == password:
        return jsonify({'message': 'Inicio de sesión exitoso.'}), 200
    else:
        return jsonify({'message': 'Usuario o contraseña incorrectos.'}), 400
    
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

if __name__ == '__main__':
    app.run(debug=True)   