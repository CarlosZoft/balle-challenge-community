import { Router } from 'express';
import { testGet } from '../services';
const router = Router();

router.get('/', testGet);

export default router;
