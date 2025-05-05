// backend/middleware/auth.middleware.js

exports.verifyAuth = async (req, res, next) => {
    const userId = req.cookies.cms_auth;
    if (!userId) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    // Optionally, you can verify the user still exists:
    const { User } = require('../models');
    const user = await User.findByPk(userId);
    if (!user) {
      res.clearCookie('cms_auth');
      return res.status(401).json({ error: 'Invalid session' });
    }
  
    // attach user to request
    req.user = user;
    next();
  };
  