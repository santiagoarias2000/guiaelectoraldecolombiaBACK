import cors from "cors";
import morgan from "morgan";
import express from "express";
import safety from "../../middleware/Safety";
import SenadoRoute from "../../routes/SenadoRoute";
import PresidenciaRoute from "../../routes/PresidenciaRoute";
import camaraRoute from "../../routes/CamaraRoute";
import municipioRoute from "../../routes/MunicipioRoute";
import departamentoRoute from "../../routes/DepartamentoRoute";
var fs = require("fs");
var https = require("https");
const helmet = require("helmet");

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.startSetting();
    this.activeRoute();
  }
  public startSetting(): void {
    const corsOptions = {
      origin: "https://localhost", // Reemplazar con el dominio permitido
      optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11, varios Smart TV) no entienden 204
    };
    this.app.set("PORT", 443);
    this.app.use(cors(corsOptions));
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    const csp = `
  default-src 'self' https://localhost;
`;
    this.app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'", "https://localhost"],
        },
      })
    );
  }
  public activeRoute(): void {
    this.app.use("/api/public/camara", camaraRoute);
    this.app.use("/api/public/municipio", municipioRoute);
    this.app.use("/api/public/departamento", departamentoRoute);
    this.app.use("/api/public/senado", SenadoRoute);
    this.app.use("/api/public/presidencia", PresidenciaRoute);
  }

  public start(): void {
    const options = {
      key: fs.readFileSync("private.key"),
      cert: fs.readFileSync("server.crt"),
    };

    const server = https.createServer(options, this.app);

    server.listen(443, () => {
      console.log("Servidor HTTPS iniciado");
    });
  }
}
export default Server;
