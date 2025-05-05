// backend/controllers/auth.controller.js
const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Find user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 2. Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 3. Set a cookie (you could also sign a JWT here)
    //    We store the user’s ID in the cookie for session lookup
    res.cookie('cms_auth', user.id, {
      httpOnly: true,
      sameSite: 'Lax',
      // secure: true, // enable in production over HTTPS
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
    });

    // 4. Respond with user info (omit password)
    const { password: pw, ...userSafe } = user.toJSON();
    res.json({ message: 'Login successful', user: userSafe });

  } catch (err) {
    console.error('Auth login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('cms_auth');
  res.json({ message: 'Logout successful' });
};
