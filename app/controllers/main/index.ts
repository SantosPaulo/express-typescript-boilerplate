import { Request, Response } from 'express';
import { LogClass } from '@decorators/log-decorator';

@LogClass()
export class Main {

    constructor() {}

    index(req: Request, res: Response) {
        return res.render('index', {
            title: 'Express with TypeScript'
        });
    }
}
