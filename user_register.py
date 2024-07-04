users = {}

def register_user(username, password):
    if username in users:
        return "User already exists"
    else:
        users[username] = password
        return "User registered"

def print_users():
    if not users:
        return "No users registered"
    else:
        for user, password in users.items():
            print(f"Username: {user}, Password: {password}")

def user_login(username, password):
    if username in users and users[username] == password:
        return "User logged in"
    else:
        return "User not found"

def menu():
    while True:
        print("\nMenu:")
        print("1. Register")
        print("2. Print users")
        print("3. sign in")
        print("4. Exit")
        
        option = input("Enter option: ")
        
        if option == "1":
            username = input("Enter username: ")
            password = input("Enter password: ")
            print(register_user(username, password))
        
        elif option == "2":
            print_users()
            
        elif option == "3":
            username = input("Enter username: ")
            password = input("Enter password: ")
            print(user_login(username, password))    
        
        elif option == "4":
            print("Exiting...")
            break
        
        else:
            print("Invalid option")
            
menu()
