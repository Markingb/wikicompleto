import {request, Request, response, Response} from 'express';
import pool from '../database'

class UsuarioController {

    
    public async put(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE usuarios set ? WHERE id_usuarios = ?', [req.body,id]);
        res.json({text: 'Usuario actualizado ' + req.params.id});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO usuarios set ?', [req.body])
        res.json({text: 'Se ha creado el usuario}'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id_usuarios = ?', [id]);
        res.json({text: 'Usuario eliminado'});
    }

    public async lista (req: Request,res: Response): Promise<void> {
        
        const posts = await pool.query('SELECT * FROM usuarios');
        res.json(posts);
    }

    public async un_usuario (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const posts_ = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id]);
        console.log(posts_);
        res.json(posts_);
    }

}

const usuarioController = new UsuarioController();
export default usuarioController;