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
exports.deleteTipo = exports.putTipo = exports.postTipo = exports.getTipo = exports.getTipos = void 0;
const tipos_modelo_1 = __importDefault(require("../models/tipos_modelo"));
const getTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipos = yield tipos_modelo_1.default.findAll();
    res.json(tipos);
});
exports.getTipos = getTipos;
const getTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipo = yield tipos_modelo_1.default.findByPk(id);
    if (tipo) {
        res.json(tipo);
    }
    else {
        res.status(404).json({
            msg: `No existe ese Tipo: ${id}`
        });
    }
});
exports.getTipo = getTipo;
const postTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeTipo = yield tipos_modelo_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existeTipo) {
            return res.status(400).json({
                msg: 'Ya existe un tipo de vehiculo con ese nombre' + body.placas_id
            });
        }
        const tipo = yield tipos_modelo_1.default.create(body);
        yield tipo.save();
        res.json(tipo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conexion fallo'
        });
    }
});
exports.postTipo = postTipo;
const putTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipo = yield tipos_modelo_1.default.findByPk(id);
        if (!tipo) {
            return res.status(404).json({
                msg: 'El tipo no existe' + id
            });
        }
        yield tipo.update(body);
        res.json(tipo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Conexion fallo'
        });
    }
});
exports.putTipo = putTipo;
const deleteTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipo = yield tipos_modelo_1.default.findByPk(id);
    if (!tipo) {
        return res.status(404).json({
            msg: 'El tipo de vehiculo que estas tratando de Eliminar no existe' + id
        });
    }
    //  await vehiculo.destroy();
    yield tipo.update({ activo: false });
    res.json(tipo);
});
exports.deleteTipo = deleteTipo;
exports.default = exports.getTipo;
//# sourceMappingURL=tipos_controller.js.map