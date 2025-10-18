
function generate_research_html(faculty_profile, topic_choice, custom_topic) {
  const topic = (custom_topic && custom_topic.trim()) ? custom_topic.trim() : (topic_choice || "General AI Research");
  const topic_lower = topic.toLowerCase();

  let research_summary = "";
  if (topic_lower.includes("machine learning")) {
    research_summary = `<h3>📘 Machine Learning — Extensive Overview</h3>
    <p><b>Definition:</b> Machine Learning (ML) is a subfield of Artificial Intelligence (AI)...</p>`;
  } else if (topic_lower.includes("random forest")) {
    research_summary = `<h3>🌳 Random Forest — Detailed Research Theory</h3>
    <p><b>Definition:</b> Random Forest is an ensemble method...</p>`;
  } else if (topic_lower.includes("deep learning")) {
    research_summary = `<h3>🧬 Deep Learning — Theoretical Expansion</h3>
    <p><b>Definition:</b> Deep Learning (DL) uses multi-layer neural networks...</p>`;
  } else if (topic_lower.includes("nlp") || topic_lower.includes("language")) {
    research_summary = `<h3>💬 Natural Language Processing (NLP) — In-depth Overview</h3>
    <p>NLP bridges the gap between human communication and computer understanding...</p>`;
  } else {
    research_summary = `<h3>📚 Research Overview on ${topic}</h3>
    <p>This topic explores interdisciplinary advancements, real-world applications, and the future of AI-driven innovation.</p>`;
  }

  const gemini_insights = `<h4>🤝 Collaboration & Grant Opportunities</h4>
  <ul>
    <li>Collaborate with research institutes (IITs, MIT, Stanford).</li>
    <li>Apply for AICTE, DST, and Horizon Europe funding programs.</li>
    <li>Partner with industries for applied AI solutions.</li>
  </ul>`;

  return `<div style="background:#ffffff; color:#0f172a; padding:22px; border-radius:14px; border:1px solid #cbd5e1;
                line-height:1.7; font-size:16px;">
    <h2 style="color:#1e3a8a;">📊 Research Topic: ${topic}</h2>
    ${research_summary}
    ${gemini_insights}
    <h4>💡 Future Scope</h4>
    <ul>
        <li>Integration of Explainable AI (XAI) frameworks.</li>
        <li>Use of cloud-based distributed learning systems.</li>
        <li>Ethical AI and fairness-driven models.</li>
    </ul>
  </div>`;
}

module.exports = async function (req, res) {
  try {
    const body = req.method === 'POST' ? req.body : {};
    const html = generate_research_html(body.faculty_profile || "", body.topic_choice || "", body.custom_topic || "");
    return res.json({ html });
  } catch (e) {
    return res.status(500).json({ message: String(e) });
  }
};
