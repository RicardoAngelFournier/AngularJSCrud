"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipos_controller_1 = require("../controller/tipos_controller");
const router = (0, express_1.Router)();
router.get('/', tipos_controller_1.getTipos);
router.get('/:id', tipos_controller_1.getTipo);
router.post('/', tipos_controller_1.postTipo);
router.put('/:id', tipos_controller_1.putTipo);
router.delete('/:id', tipos_controller_1.deleteTipo);
exports.default = router;
//# sourceMappingURL=tipos_ruta.js.map