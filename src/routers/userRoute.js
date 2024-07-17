const express = require('express')
const userAuthRouter = express.Router();

userAuthRouter.get('/test-user-route', (req, res) => {
    res.status(200).json({ message: 'This is a test user route', user: req.user });
});

module.exports = userAuthRouter;