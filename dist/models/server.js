"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const tipos_ruta_1 = __importDefault(require("../routes/tipos_ruta"));
const tiempo_ruta_1 = __importDefault(require("../routes/tiempo_ruta"));
const cors_1 = __importDefault(require("cors"));
const conexion_1 = __importDefault(require("../db/conexion"));
class Server {
    constructor() {
        this.apiRutas = {
            vehiculos: '/api/vehiculos',
            tipos: '/api/tipos',
            tiempo: '/api/tiempo'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.database();
        this.middlewares();
        this.routes();
    }
    routes() {
        this.app.use(this.apiRutas.vehiculos, usuario_1.default);
        this.app.use(this.apiRutas.tipos, tipos_ruta_1.default);
        this.app.use(this.apiRutas.tiempo, tiempo_ruta_1.default);
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conexion_1.default.authenticate();
                console.log('............................');
                console.log('base de datos conectada!  :)');
                console.log('............................');
            }
            catch (error) {
                throw new Error('error');
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)({}));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map