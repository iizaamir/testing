const express = require('express');
const AppError = require('./utils/appError');
//const globalErrorHandler = require('./controllers/errorController');
const teamRouter = require('./routes/teamRoutes');
//const adminRouter = require('./routes/adminRoutes');
const app = express();
//Body parser, reading data from body into req.body
app.use(express.json({limit: '50kb'})); //express.json is the middleware, limit amount of data that comes in body.
app.use(express.static(`${__dirname}/public`)); //this is a builtin middleware, pass diractory to where we serve the static files
app.use('/api/teams', teamRouter); // /api/v1/tours is where we want to use out tourRouter. 
app.all('*',(req,res,next) => { //*means everything
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
module.exports = app;