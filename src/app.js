require('dotenv').config();
const express = require('express');
const userAuthRoutes = require('./routers/userRoute.js');
const adminAuthRoutes = require('./routers/adminRoute.js');
const artistAuthRoutes = require('./routers/artistRoutes.js');
const errorHandler = require('./controllers/v1/errorController.js');
const AppError = require('../utils/appError.js');
const morgan = require('morgan');
const app = express();
const cors = require('cors')

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
    next();
});

// Routes
app.use(express.static('public'));
app.use('/api/user', userAuthRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/artist', artistAuthRoutes);

// Error Tracker
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

// Error Handler
app.use(errorHandler);
module.exports = app;