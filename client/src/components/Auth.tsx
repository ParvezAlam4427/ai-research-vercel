
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../api";

export default function Auth() {
  const [mode, setMode] = useState<"Login" | "Signup">("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const nav = useNavigate();

  const handle = async () => {
    try {
      if (mode === "Signup") {
        const res = await signup(username, password);
        setStatus(res.message || JSON.stringify(res));
      } else {
        const res = await login(username, password);
        setStatus(res.message || JSON.stringify(res));
        if (res.success && res.token) {
          localStorage.setItem("user", username);
          localStorage.setItem("token", res.token);
          nav("/research");
        }
      }
    } catch (e: any) {
      setStatus("Error connecting to server");
    }
  };

  return (
    <div className="center-screen">
      <div className="card auth-card">
        <h2 className="mb-4">{mode === "Login" ? "🔐 Login" : "📝 Signup"}</h2>
        <div className="flex-row mb-3">
          <button className={`btn ${mode==="Login" ? "active":""}`} onClick={()=>setMode("Login")}>Login</button>
          <button className={`btn ${mode==="Signup" ? "active":""}`} onClick={()=>setMode("Signup")}>Signup</button>
        </div>
        <input className="input" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn primary mt-3" onClick={handle}>Continue 🚀</button>
        <div className="mt-3 text-sm">{status}</div>
      </div>
    </div>
  );
}
