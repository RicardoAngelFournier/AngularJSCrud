import { Router } from 'express';
import { getVehiculos, getVehiculo, postVehiculo, putVehiculo, deleteVehiculo } from '../controller/usuarios';

const router = Router();

router.get('/',         getVehiculos);
router.get('/:id',      getVehiculo);
router.post('/',        postVehiculo);
router.put('/:id',      putVehiculo);
router.delete('/:id',   deleteVehiculo);

export default router;