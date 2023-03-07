import { Router } from "express";
import municipioController from "../controller/municipio/MunicipioController";

class MunicipioRoutes {
    public routeApiMunicipio: Router;
    constructor() {
        this.routeApiMunicipio = Router();
        this.setting();
    }
    public setting() {
        this.routeApiMunicipio.get("/:idDepartment",municipioController.getMeListDepartment);
        this.routeApiMunicipio.get("/one/:idMunicipality",municipioController.getMeMunicipio);
    }
}
const municipioRoutes = new MunicipioRoutes();
export default municipioRoutes.routeApiMunicipio;