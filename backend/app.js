// backend/app.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Sync models
// before
sequelize.sync()

// after
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Database & tables synced (with alter)'))
  .catch(err => console.error('❌ Sync error:', err));


module.exports = app;
