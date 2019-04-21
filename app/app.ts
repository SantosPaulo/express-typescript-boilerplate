import * as dotenv from "dotenv";
import * as path from 'path';
import 'module-alias/register';

import createError from 'http-errors';
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
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;

