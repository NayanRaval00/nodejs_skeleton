const express = require('express')
const adminAuthRouter = express.Router();


adminAuthRouter.get('/test-admin-route', (req, res) => {
    res.status(200).json({ message: 'This is a test admin route', user: req.user });
});

module.exports = adminAuthRouter;