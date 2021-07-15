import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import bodyParser from 'body-parser';

import './database';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!');
});
