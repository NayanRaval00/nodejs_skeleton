const express = require('express')
const artistAuthRouter = express.Router();

artistAuthRouter.get('/test-artist-route', (req, res) => {
    res.status(200).json({ message: 'This is a test artist route', user: req.user });
});

module.exports = artistAuthRouter;