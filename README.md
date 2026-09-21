# LAN Chat 💬

A simple prototype for sending messages between devices on the same network using Socket.IO.

> 🚧 This is currently a prototype, not a production-ready product.

## Tech Stack

- React (Vite)
- Node.js
- Express.js
- Socket.IO

## How to Start

### 1. Clone the Repository

```bash
git clone https://github.com/nitis104/Lan-chat.git
cd Lan-chat
```

### 2. Start the Backend

```bash
cd server
npm install
node server.js
```

The backend will run on port `3000`.

### 3. Start the Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev -- --host 0.0.0.0
```

### 4. Connect Devices

- Connect your laptop and phone to the same Wi-Fi network.
- Find your laptop's private IP address.

```bash
ip addr
```

- Open the frontend on your phone using:

```text
http://YOUR_PRIVATE_IP:5173
```

Start chatting! 🚀
