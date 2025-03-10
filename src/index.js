//import fastify from 'fastify';
import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import xssClear from 'xss-clean';
import morgan from 'morgan';
import dotenv from 'dotenv';

import sequelize from './config/database.js';

//Outras pastas
import routes from './routes/routes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config()
const app = express()

//Middlewares de segurança
app.use(helmet())
app.use(cors())
app.use(xssClear())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', routes);
app.use(errorHandler)

export default app;