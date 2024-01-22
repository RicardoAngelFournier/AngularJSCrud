import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Tiempos = db.define('Tiempos',{
    id_placas: {
        type:DataTypes.STRING
    },
    entrada: {
        type:DataTypes.BIGINT
    },
    salida: {
        type:DataTypes.TINYINT
    },
    horas: {
        type:DataTypes.TINYINT
    },
    importe: {
        type:DataTypes.TINYINT
    },
});

export default Tiempos;