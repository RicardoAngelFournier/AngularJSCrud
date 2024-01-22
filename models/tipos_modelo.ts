import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Tipos = db.define('Tipos',{
    nombre: {
        type:DataTypes.STRING
    },
    rate: {
        type:DataTypes.BIGINT
    },
    pagan: {
        type:DataTypes.TINYINT
    },
    activo: {
        type:DataTypes.TINYINT
    },
});

export default Tipos;

