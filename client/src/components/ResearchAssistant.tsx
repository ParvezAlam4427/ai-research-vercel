
import React, { useState } from "react";
import { suggestTopics, generateResearch } from "../api";

export default function ResearchAssistant() {
  const [profile, setProfile] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [html, setHtml] = useState("");

  const handleSuggest = async () => {
    const res = await suggestTopics(profile);
    setTopics(res.topics || []);
    if (res.topics && res.topics.length) setSelected(res.topics[0]);
  };

  const handleGenerate = async () => {
    const res = await generateResearch(profile, selected, customTopic);
    setHtml(res.html || "");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="page-layout">
      <div className="card left-col">
        <h3>👤 Faculty Profile</h3>
        <textarea className="textarea" rows={8} value={profile} onChange={e=>setProfile(e.target.value)} placeholder="Enter your research profile..." />
        <button className="btn primary mt-2" onClick={handleSuggest}>✨ Suggest Trending Topics</button>

        <label className="mt-3 block">Trending Topics</label>
        <select className="select" value={selected} onChange={e=>setSelected(e.target.value)}>
          {topics.map(t=> <option key={t} value={t}>{t}</option>)}
        </select>

        <label className="mt-3 block">Or enter a custom topic (optional)</label>
        <input className="input" value={customTopic} onChange={e=>setCustomTopic(e.target.value)} />

        <div className="mt-3">
          <button className="btn primary" onClick={handleGenerate}>🚀 Generate Detailed Research</button>
          <button className="btn ghost ml-2" onClick={logout}>🔓 Logout</button>
        </div>
      </div>

      <div className="card right-col">
        <h3>📚 Research Output</h3>
        <div className="output" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
