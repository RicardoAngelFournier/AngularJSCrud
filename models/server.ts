import express, { Application} from 'express';
import userRoutes from '../routes/usuario';
import tiposRoutes from '../routes/tipos_ruta';
import tiempoRoutes from '../routes/tiempo_ruta';
import cors from 'cors';

import db from '../db/conexion';

        class Server{
            private app: Application;
            private port: string;
            private apiRutas = {
                vehiculos: '/api/vehiculos',
                tipos: '/api/tipos',
                tiempo: '/api/tiempo'
            }
                constructor() {
                    this.app = express();
                    this.port = process.env.PORT || '8000';
                    this.database();
                    this.middlewares();
                    this.routes();
                }

                routes(){
                    this.app.use( this.apiRutas.vehiculos, userRoutes)
                    this.app.use( this.apiRutas.tipos, tiposRoutes)
                    this.app.use( this.apiRutas.tiempo, tiempoRoutes)
                }
                
                async database() {
                    try {
                        await db.authenticate();
                        console.log('............................');
                        console.log('base de datos conectada!  :)');
                        console.log('............................');
                    } catch (error) {
                        throw new Error('error');
                    }
                }

                middlewares(){
                    this.app.use(cors({ }));
                    this.app.use(express.json() );
                    this.app.use(express.static('public') );
                }

                listen() {
                    this.app.listen(this.port, () =>{
                        console.log('servidor corriendo en el puerto: ' + this.port);
                    })
                }

            }

export default Server;