import {  Router } from 'express'
import postController from '../controllers/postsControllers'

class PostRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',postController.lista);
        this.router.get('/:id',postController.un_post);
        this.router.post('/', postController.create);
        this.router.delete('/:id', postController.delete);
        this.router.put('/:id', postController.put);
    }
}
const postRoutes = new PostRoutes();
export default postRoutes.router;