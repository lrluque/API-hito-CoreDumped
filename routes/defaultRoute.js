const {Router} = require('express');
const router = Router();
const controller = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
});



module.exports = router;