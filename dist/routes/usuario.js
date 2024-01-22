"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getVehiculos);
router.get('/:id', usuarios_1.getVehiculo);
router.post('/', usuarios_1.postVehiculo);
router.put('/:id', usuarios_1.putVehiculo);
router.delete('/:id', usuarios_1.deleteVehiculo);
exports.default = router;
//# sourceMappingURL=usuario.js.map