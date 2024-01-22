import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Vehiculo = db.define('Vehiculo',{
    placas_id: {
        type:DataTypes.STRING
    },
    esta_estacionado: {
        type:DataTypes.TINYINT
    },
    tipo: {
        type:DataTypes.BIGINT
    },
    activo: {
        type:DataTypes.TINYINT
    },
    nombre: {
        type:DataTypes.STRING
    },
});

export default Vehiculo;