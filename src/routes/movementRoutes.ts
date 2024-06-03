import { Router, Request, Response } from 'express';
import * as movementController from '../controllers/movementController';

const router = Router();

router.post('/', movementController.createMovement);
router.get('/', movementController.getAllMovements);
router.get('/:id', movementController.getMovementById);
router.put('/:id', movementController.updateMovementById);
router.delete('/:id', movementController.deleteMovementById);

export default router;
