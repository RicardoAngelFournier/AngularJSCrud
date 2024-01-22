"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('proyecto1', 'root', 'toor', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});
exports.default = db;
//# sourceMappingURL=conexion.js.map