import { Router } from 'express';
import { create, getAll, updateById, remove, getById } from '../controllers/containerController';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById); 
router.put('/:id', updateById);
router.delete('/:id', remove);

export default router;
