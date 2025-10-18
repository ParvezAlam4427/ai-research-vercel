

let users_db = {}; // username -> password

module.exports = async function (req, res) {
  try {
    const body = req.method === 'POST' ? req.body : null;
    const { username, password } = body || {};
    if (!username || !password) {
      return res.status(400).json({ success: false, message: "username and password required" });
    }
    if (users_db[username] && users_db[username] === password) {
      const token = `token-${username}`;
      return res.json({ success: true, message: `✅ Welcome, ${username}!`, token });
    }
    return res.json({ success: false, message: "❌ Invalid username or password." });
  } catch (e) {
    return res.status(500).json({ success: false, message: String(e) });
  }
};
