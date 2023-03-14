"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const SenadoRoute_1 = __importDefault(require("../../routes/SenadoRoute"));
const PresidenciaRoute_1 = __importDefault(require("../../routes/PresidenciaRoute"));
const CamaraRoute_1 = __importDefault(require("../../routes/CamaraRoute"));
const MunicipioRoute_1 = __importDefault(require("../../routes/MunicipioRoute"));
const DepartamentoRoute_1 = __importDefault(require("../../routes/DepartamentoRoute"));
var fs = require("fs");
var https = require("https");
const helmet = require("helmet");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activeRoute();
    }
    startSetting() {
        const corsOptions = {
            origin: "https://localhost",
            optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11, varios Smart TV) no entienden 204
        };
        this.app.set("PORT", 443);
        this.app.use((0, cors_1.default)(corsOptions));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        const csp = `
  default-src 'self' https://localhost;
`;
        this.app.use(helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'", "https://localhost"],
            },
        }));
    }
    activeRoute() {
        this.app.use("/api/public/camara", CamaraRoute_1.default);
        this.app.use("/api/public/municipio", MunicipioRoute_1.default);
        this.app.use("/api/public/departamento", DepartamentoRoute_1.default);
        this.app.use("/api/public/senado", SenadoRoute_1.default);
        this.app.use("/api/public/presidencia", PresidenciaRoute_1.default);
    }
    start() {
        const options = {
            key: fs.readFileSync("server.key"),
            cert: fs.readFileSync("server.crt"),
        };
        const server = https.createServer(options, this.app);
        server.listen(443, () => {
            console.log("Servidor HTTPS iniciado");
        });
    }
}
exports.default = Server;
