import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import 'express-async-errors'

import userRoute from './routes/userRoute.js'
import jobRoute from './routes/jobRoute.js'

import errorHandlerMiddleware from './middlewares/errorHandler.js';
import notFoundMiddleware from './middlewares/notFound.js';


import { connectDB, mongoOff, mongoOn } from './db/connect.js';



const app = express();
dotenv.config()

mongoOn()
mongoOff()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Routes
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/job', jobRoute);


// Middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5001

app.listen(port, () => {
  connectDB()
  console.log(`Server connected on port ${port}`);
})