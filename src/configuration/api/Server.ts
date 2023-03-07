import cors from "cors";
import morgan from "morgan";
import express from "express";
import safety from "../../middleware/Safety";
import SenadoRoute from "../../routes/SenadoRoute";
import PresidenciaRoute from "../../routes/PresidenciaRoute";
import camaraRoute from "../../routes/CamaraRoute";
import municipioRoute from "../../routes/MunicipioRoute";
import departamentoRoute from "../../routes/DepartamentoRoute";

class Server{
    public app: express.Application; 

    constructor(){
        this.app = express();
        this.startSetting();
        this.activeRoute();
    }
    public startSetting(): void{
        this.app.set("PORT", 3123);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit:"100mb"}));
        this.app.use(express.urlencoded({extended:true}));
    }
    public activeRoute():void{
        this.app.use('/api/public/camara',camaraRoute);
        this.app.use('/api/public/municipio',municipioRoute);
        this.app.use('/api/public/departamento',departamentoRoute);
        this.app.use('/api/public/senado',SenadoRoute);
       this.app.use('/api/public/presidencia',PresidenciaRoute);
    }
    public start(): void {
        this.app.listen(this.app.get("PORT"),()=>{
            console.log("It works", this.app.get("PORT"));
        });
    }
}
export default Server;