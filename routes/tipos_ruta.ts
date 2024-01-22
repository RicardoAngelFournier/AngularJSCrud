import { Router } from 'express';
import { getTipos, getTipo, postTipo, putTipo, deleteTipo } from '../controller/tipos_controller';

const router = Router();

router.get('/',         getTipos);
router.get('/:id',      getTipo);
router.post('/',        postTipo);
router.put('/:id',      putTipo);
router.delete('/:id',   deleteTipo);

export default router;