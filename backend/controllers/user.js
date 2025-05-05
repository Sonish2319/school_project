// backend/controllers/user.controller.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
// Define SALT_ROUNDS here:
const SALT_ROUNDS = 10;

  exports.create = async (req, res) => {
  try {
    const { name, lastname, username, password, role } = req.body;

    // hash the password
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
      name,
      lastname,
      username,
      password: hashed,
      role,
    });

    // never send the hash back
    const { password: _, ...userWithoutPw } = user.toJSON();
    res.status(201).json(userWithoutPw);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// get all users
exports.findAll = async (_, res) => {
  const users = await User.findAll();
  res.json(users);
};

// get a single user
exports.findOne = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

// update a user
  exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // if password is being updated, hash it
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, SALT_ROUNDS);
    }

    await User.update(updateData, { where: { id } });
    const updated = await User.findByPk(id);

    const { password: _, ...userWithoutPw } = updated.toJSON();
    res.json(userWithoutPw);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a user
exports.remove = async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.status(204).end();
};
