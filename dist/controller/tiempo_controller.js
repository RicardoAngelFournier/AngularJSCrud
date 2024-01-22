"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTiempo = exports.putTiempo = exports.postTiempo = exports.getTiempo = exports.getTiempos = void 0;
const tiempo_modelo_1 = __importDefault(require("../models/tiempo_modelo"));
const getTiempos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tiempo = yield tiempo_modelo_1.default.findAll();
    res.json(tiempo);
});
exports.getTiempos = getTiempos;
const getTiempo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_placas } = req.params;
    const tiempo = yield tiempo_modelo_1.default.findByPk(id_placas);
    if (tiempo) {
        res.json(tiempo);
    }
    else {
        res.status(404).json({
            msg: `No existe ese tiempo: ${id_placas}`
        });
    }
});
exports.getTiempo = getTiempo;
const postTiempo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeTiempo = yield tiempo_modelo_1.default.findOne({
            where: {
                id_placas: body.id_placas
            }
        });
        if (existeTiempo) {
            return res.status(400).json({
                msg: 'Ya existe TIEMPO para ese vehiculo c' + body.id_placas
            });
        }
        const tiempo = yield tiempo_modelo_1.default.create(body);
        yield tiempo.save();
        res.json(tiempo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conexion fallo'
        });
    }
});
exports.postTiempo = postTiempo;
const putTiempo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tiempo = yield tiempo_modelo_1.default.findByPk(id);
        if (!tiempo) {
            return res.status(404).json({
                msg: 'El tiempo no existe' + id
            });
        }
        yield tiempo.update(body);
        res.json(tiempo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conexion fallo'
        });
    }
});
exports.putTiempo = putTiempo;
const deleteTiempo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_placas } = req.params;
    const tiempo = yield tiempo_modelo_1.default.findByPk(id_placas);
    if (!tiempo) {
        return res.status(404).json({
            msg: 'El tiempo o vehiculo no existe' + id_placas
        });
    }
    //  await vehiculo.destroy();
    yield tiempo.update({ activo: false });
    res.json(tiempo);
});
exports.deleteTiempo = deleteTiempo;
exports.default = exports.getTiempo;
//# sourceMappingURL=tiempo_controller.js.map