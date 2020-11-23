var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend for Verification code' });
});

router.post('/verify', function(req, res, next) {
  const code  = req.body.code;
  if(!code) {
    res.status(400).send({success: false, message: 'Required param missing'})
  } else {
    const digits = code.split('');
    if(digits.length<6 || digits.pop() ==7) {
      res.status(400).send({success: false, message: 'Invalid code'});
    } else {
      res.send({success: true, message: 'Code verified'});
    }
  }
});

module.exports = router;
