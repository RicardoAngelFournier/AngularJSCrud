import { Request } from 'express'
import { Response } from 'express'
import Tiempos from '../models/tiempo_modelo';


export const getTiempos = async (req: Request, res: Response) => {
    
    const tiempo = await Tiempos.findAll();
    res.json(tiempo);

}

export const getTiempo = async (req: Request, res: Response) => {
    
    const{id_placas} = req.params;
    const tiempo = await Tiempos.findByPk(id_placas);
    
        if (tiempo){
            res.json(tiempo);
        } else {
            res.status(404).json({
                msg: `No existe ese tiempo: ${id_placas}`
            });
        }

}

export const postTiempo = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const existeTiempo = await Tiempos.findOne({
            where:{ 
                id_placas: body.id_placas
            }
        })
        if (existeTiempo){
            return res.status(400).json({
                msg: 'Ya existe TIEMPO para ese vehiculo c' + body.id_placas
            });
        }


        const tiempo = await Tiempos.create(body);
        await tiempo.save();

        res.json(tiempo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }

}

export const putTiempo = async (req: Request, res: Response) => {
    
    const{id} = req.params;
    const { body } = req;

    try {

    const tiempo = await Tiempos.findByPk(id);
    if (!tiempo){
        return res.status(404).json({
            msg: 'El tiempo no existe' + id
        })
    } 

    await tiempo.update( body );

    res.json(tiempo);


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }


}

export const deleteTiempo=  async (req: Request, res: Response) => {
    
    const{id_placas} = req.params;

    const tiempo = await Tiempos.findByPk(id_placas);
    if (!tiempo){
        return res.status(404).json({
            msg: 'El tiempo o vehiculo no existe' + id_placas
        })
    } 

  //  await vehiculo.destroy();

    await tiempo.update({activo: false});

    res.json(tiempo)
}



export default getTiempo