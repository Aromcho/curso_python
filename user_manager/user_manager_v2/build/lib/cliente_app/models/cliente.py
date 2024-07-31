class Cliente:
    def __init__(self, username, password, email, edad):
        self.username = username
        self.password = password
        self.email = email
        self.edad = edad
        self.compras = []

    def __str__(self):
        return f"Cliente({self.username}, {self.email}, {self.edad} años)"

    def verificar_password(self, password):
        return self.password == password

    def agregar_compra(self, producto):
        self.compras.append(producto)

    def mostrar_compras(self):
        return self.compras
