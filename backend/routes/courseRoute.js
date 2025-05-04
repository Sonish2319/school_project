const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
});

// Create course
router.post('/', async (req, res) => {
  const newCourse = await Course.create(req.body);
  res.status(201).json(newCourse);
});

module.exports = router;
