

let users_db = {}; // username -> password

module.exports = async function (req, res) {
  try {
    const body = req.method === 'POST' ? req.body : null;
    const { username, password } = body || {};
    if (!username || !password) {
      return res.status(400).json({ success: false, message: "username and password required" });
    }
    if (users_db[username]) {
      return res.json({ success: false, message: "❌ Username already exists!" });
    }
    users_db[username] = password;
    return res.json({ success: true, message: "✅ Signup successful! Please login." });
  } catch (e) {
    return res.status(500).json({ success: false, message: String(e) });
  }
};
