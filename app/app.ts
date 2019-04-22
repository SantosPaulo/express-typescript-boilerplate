import * as dotenv from "dotenv";
import * as path from 'path';
import 'module-alias/register';

import handlers from '@middlewares/handlers';

import logger from 'morgan';
import cookieParser from 'cookie-parser';

import Express from 'express';
import routes from '@routes/index';

dotenv.config();

const app: Express.Application = Express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'public')));

// app routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(handlers.notFoundHandler);

// error handler
app.use(handlers.internalServerError);

export default app;

