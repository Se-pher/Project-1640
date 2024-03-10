const express = require('express');
const router = express.Router();

const users = [];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.redirect('/forgot-password'); 
  } else {
    res.status(200).json({ message: 'Đăng nhập không thành công', token: 'your_auth_token' });
  }
});

module.exports = router;
