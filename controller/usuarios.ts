import { Request } from 'express'
import { Response } from 'express'
import Vehiculo from '../models/vehiculos_modelo';
import { Sequelize } from 'sequelize';
import { QueryTypes } from 'sequelize';

export const getVehiculos = async (req: Request, res: Response) => {
    
    const vehiculo = await Vehiculo.findAll();
    res.json(vehiculo);
}

export const getVehiculo = async (req: Request, res: Response) => {
    
    const{id} = req.params;
    const vehiculo = await Vehiculo.findByPk(id);
    
        if (vehiculo){
            res.json(vehiculo);
        } else {
            res.status(404).json({
                msg: `No existe ese vehiculo: ${id}`
            });
        }

}

export const postVehiculo = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const existePlacas = await Vehiculo.findOne({
            where:{ 
                placas_id: body.placas_id
            }
        })
        if (existePlacas){
            return res.status(400).json({
                msg: 'Ya existe un vehiculo con esa placa' + body.placas_id
            });
        }



        const vehiculo = await Vehiculo.create(body);
        await vehiculo.save();

        res.json(vehiculo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }

}

export const putVehiculo = async (req: Request, res: Response) => {
    
    const{id} = req.params;
    const { body } = req;

    try {

    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo){
        return res.status(404).json({
            msg: 'El vehiculo no existe' + id
        })
    } 

    await vehiculo.update( body );

    res.json(vehiculo);


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }

}

export const deleteVehiculo =  async (req: Request, res: Response) => {
    
    const{id} = req.params;

    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo){
        return res.status(404).json({
            msg: 'El vehiculo que estas tratando de Eliminar no existe' + id
        })
    } 

   await vehiculo.destroy();

    res.json(vehiculo)
}






export default getVehiculo