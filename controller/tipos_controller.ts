import { Request } from 'express'
import { Response } from 'express'
import Tipos from '../models/tipos_modelo';


export const getTipos = async (req: Request, res: Response) => {
    
    const tipos = await Tipos.findAll();
    res.json(tipos);
}

export const getTipo = async (req: Request, res: Response) => {
    
    const{id} = req.params;
    const tipo = await Tipos.findByPk(id);
    
        if (tipo){
            res.json(tipo);
        } else {
            res.status(404).json({
                msg: `No existe ese Tipo: ${id}`
            });
        }

}

export const postTipo = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const existeTipo = await Tipos.findOne({
            where:{ 
                nombre: body.nombre
            }
        })
        if (existeTipo){
            return res.status(400).json({
                msg: 'Ya existe un tipo de vehiculo con ese nombre' + body.placas_id
            });
        }


        const tipo = await Tipos.create(body);
        await tipo.save();

        res.json(tipo);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }

}

export const putTipo = async (req: Request, res: Response) => {
    
    const{id} = req.params;
    const { body } = req;

    try {

    const tipo = await Tipos.findByPk(id);
    if (!tipo){
        return res.status(404).json({
            msg: 'El tipo no existe' + id
        })
    } 

    await tipo.update( body );

    res.json(tipo);


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Conexion fallo'
        })
    }

}

export const deleteTipo =  async (req: Request, res: Response) => {
    
    const{id} = req.params;

    const tipo = await Tipos.findByPk(id);
    if (!tipo){
        return res.status(404).json({
            msg: 'El tipo de vehiculo que estas tratando de Eliminar no existe' + id
        })
    } 

  //  await vehiculo.destroy();

    await tipo.update({activo: false});

    res.json(tipo)
}



export default getTipo