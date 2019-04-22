import e from 'express';
import createError from 'http-errors';

const handlers = {

    notFoundHandler: (req: e.Request, res: e.Response, next: e.NextFunction) => {
        next(createError(404));
    },

    internalServerError: (err: any, req: e.Request, res: e.Response, next: e.NextFunction) => {

        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
      
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }

};

export default handlers;

