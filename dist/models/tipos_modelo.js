"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Tipos = conexion_1.default.define('Tipos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    rate: {
        type: sequelize_1.DataTypes.BIGINT
    },
    pagan: {
        type: sequelize_1.DataTypes.TINYINT
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT
    },
});
exports.default = Tipos;
//# sourceMappingURL=tipos_modelo.js.map