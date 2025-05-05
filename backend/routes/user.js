// backend/routes/user.routes.js
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/', userCtrl.create);
router.get('/', userCtrl.findAll);
router.get('/:id', userCtrl.findOne);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.remove);

module.exports = router;
