import { Router } from 'express';
import * as movementReportController from '../controllers/movementReportController';

const router = Router();

router.get('/', movementReportController.generateReport);

export default router;
