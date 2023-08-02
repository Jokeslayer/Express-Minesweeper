const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const recordsCtrl = require('../controllers/records');

router.get('/', recordsCtrl.show);

// POST /records
router.post('/', recordsCtrl.create);

router.put('/:id', recordsCtrl.update);