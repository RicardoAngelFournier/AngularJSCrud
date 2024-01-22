"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiempo_controller_1 = require("../controller/tiempo_controller");
const router = (0, express_1.Router)();
router.get('/', tiempo_controller_1.getTiempos);
router.get('/:id', tiempo_controller_1.getTiempo);
router.post('/', tiempo_controller_1.postTiempo);
router.put('/:id', tiempo_controller_1.putTiempo);
router.delete('/:id', tiempo_controller_1.deleteTiempo);
exports.default = router;
//# sourceMappingURL=tiempo_ruta.js.map