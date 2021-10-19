const router = require('express').Router();
const translate = require('./translate');

router.route('/translate').post(translate.translator);


module.exports = router;