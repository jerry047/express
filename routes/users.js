var express = require('express');
var router = express.Router();
const User = require('../schema/user.js')


/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.get('/create', function(req, res) {
    res.render('adduser')
});

router.get('/list', async function(req, res) {
    const users = await User.find({}) || [];

    res.render('listuser', { users })
});


router.post('/create', async function(req, res) {
    const requestBody = req.body

    const user = new User(requestBody);
    await user.save()

    const users = await User.find({}) || [];
    res.render('listuser', { users })
});


module.exports = router