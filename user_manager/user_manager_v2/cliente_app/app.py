from flask import Flask
from cliente_app.api.routes import bp as api_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(api_bp, url_prefix='/api')

    @app.route('/')
    def home():
        return "Bienvenido a la Gestión de Clientes"

    return app

def main():
    app = create_app()
    app.run(debug=True)

if __name__ == '__main__':
    main()
