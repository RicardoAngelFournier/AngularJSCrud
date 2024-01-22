"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Vehiculo = conexion_1.default.define('Vehiculo', {
    placas_id: {
        type: sequelize_1.DataTypes.STRING
    },
    esta_estacionado: {
        type: sequelize_1.DataTypes.TINYINT
    },
    tipo: {
        type: sequelize_1.DataTypes.BIGINT
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = Vehiculo;
//# sourceMappingURL=vehiculos_modelo.js.map