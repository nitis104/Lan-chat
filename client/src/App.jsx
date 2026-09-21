
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(`http://${window.location.hostname}:3000`);

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function receiveMessage(msg) {
      setMessages((prev) => [...prev, msg]);
    }

    socket.on("receive-message", receiveMessage);

    return () => {
      socket.off("receive-message", receiveMessage);
    };
  }, []);

  function sendMessage() {
    if (!message.trim()) return;

    socket.emit("send-message", message);
    setMessage("");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>LAN Chat</h1>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />

      <button onClick={sendMessage}>Send</button>

      <h2>Messages</h2>

      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
}

export default App;

//npm run dev -- --host 0.0.0.0