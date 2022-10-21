import {Request, Response} from 'express';

class IndexController {
    public index (req: Request,res: Response) {
        res.send('Hola3')
    }
}
export const indexController = new IndexController();