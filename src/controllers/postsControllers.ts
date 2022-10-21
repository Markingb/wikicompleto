import {request, Request, response, Response} from 'express';
import pool from '../database'

class PostController {
    public async lista (req: Request,res: Response): Promise<void> {
        
        const posts = await pool.query('SELECT * FROM posts');
        res.json(posts);
    }

    public async un_post (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const posts_ = await pool.query('SELECT * FROM posts WHERE id_post = ?', [id]);
        console.log(posts_);
        res.json(posts_);
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO posts set ?', [req.body])
        res.json({text: 'Se ha creado el postt'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM posts WHERE id_post = ?', [id]);
        res.json({text: 'Post eliminado'});
    }

    public async put(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE posts set ? WHERE id_post = ?', [req.body,id]);
        res.json({text: 'Post actualizado ' + req.params.id});
    }

}
const postController = new PostController();
export default postController;