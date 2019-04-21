import e from 'express';

const main = {

    index: (req: e.Request, res: e.Response, next: e.NextFunction) => {
        return res.render('index', {
            title: 'Express with TypeScript'
        });
    }

}

export default main;

