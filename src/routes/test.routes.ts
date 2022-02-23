import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', (_request: Request, response: Response) => {
    response.send('Hello World!');
});

export default router;
