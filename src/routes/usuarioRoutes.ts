import {  Router } from 'express'
import usuarioController from '../controllers/usuarioController'

class UsuarioRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',usuarioController.lista);
        this.router.get('/:id',usuarioController.un_usuario);
        this.router.post('/', usuarioController.create);
        this.router.delete('/:id', usuarioController.delete);
        this.router.put('/:id', usuarioController.put);
    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;