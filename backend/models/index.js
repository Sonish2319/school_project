// backend/models/index.js
const sequelize = require('../config/db');

// import models here
const User = require('./users');

// if you have associations, you’d call them here:
// User.hasMany(...)

module.exports = {
  sequelize,
  User,
};

