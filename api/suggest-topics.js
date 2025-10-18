
function suggest_trending(profile_text) {
  const keywords = (profile_text || "").toLowerCase();
  const suggestions = [];
  if (keywords.includes("health") || keywords.includes("medical")) suggestions.push("AI in Healthcare");
  if (keywords.includes("nlp") || keywords.includes("language")) suggestions.push("Natural Language Processing (NLP)");
  if (keywords.includes("robot") || keywords.includes("automation")) suggestions.push("Robotics & Automation");
  if (keywords.includes("quantum")) suggestions.push("Quantum Computing");
  if (keywords.includes("energy") || keywords.includes("green")) suggestions.push("Green Energy AI");
  if (keywords.includes("vision") || keywords.includes("image")) suggestions.push("Computer Vision");
  if (keywords.includes("data")) suggestions.push("Data Science and Predictive Analytics");
  return suggestions.length ? suggestions : ["General AI Research"];
}

module.exports = async function (req, res) {
  try {
    const body = req.method === 'POST' ? req.body : {};
    const topics = suggest_trending(body.profile_text || "");
    return res.json({ topics });
  } catch (e) {
    return res.status(500).json({ message: String(e) });
  }
};
