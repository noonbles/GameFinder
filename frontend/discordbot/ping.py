import socket
import time

def ping():
    startTime = time.time() #time in milliseconds!!!!!!!
    host = 'discordbot'
    port = 9898

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        server_socket.bind((host, port))
        server_socket.listen()

        # print(f"HOSTING ON PORT {port} USING HOST {host}")

        while True:
            client_socket, client_address = server_socket.accept()
            # print(f"{client_address} CONNECTED!")

            data = client_socket.recv(1024).decode('utf-8')
            if data == "ping":
                response = str(startTime)
                client_socket.sendall(response.encode('utf-8'))
            client_socket.close()

if __name__ == "__main__":
    ping()
