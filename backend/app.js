const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');
const sequelize = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/courses', courseRoutes);

sequelize.sync().then(() => console.log("DB Connected"));

module.exports = app;
