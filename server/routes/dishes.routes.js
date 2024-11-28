import { Router } from 'express';
import { upload } from '../config/multer.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { getDishes, createDish, updateDish, deleteDish } from '../controllers/dishes.controller.js';

const router = Router();

router.get('/', getDishes);
router.post('/', authenticate, upload.single('image'), createDish);
router.put('/:id', authenticate, upload.single('image'), updateDish);
router.delete('/:id', authenticate, deleteDish);

export default router;