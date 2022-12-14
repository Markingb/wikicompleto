import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexRoutes from './routes/indexRoutes'
import postRoutes from './routes/postRoutes'
import usuarioController from "./controllers/usuarioController";
import usuarioRoutes from "./routes/usuarioRoutes";

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/posts',postRoutes)
        this.app.use('/api/usuarios', usuarioRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en el puerto ', this.app.get('port'))
        })
    }


}

const server = new Server();
server.start();