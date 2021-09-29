const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();
router.get('/', userController.getUser);
router.post('/', userController.postUser);
module.exports = router;
