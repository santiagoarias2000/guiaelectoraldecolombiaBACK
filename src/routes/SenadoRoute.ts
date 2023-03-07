import { Router } from "express";
import listControllerSenado from "../controller/senado/ListSenado";
import circuncripcionIndigenaSenado from "../controller/senado/CircuncripcionIndigena";
import circuncripcionNacionalSenado from "../controller/senado/CircuncripcionNacional";


class SenadoRoutes {
    public routesApiSenado: Router;
    constructor() {
        this.routesApiSenado = Router();
        this.setting();
    }
    public setting() {

        this.routesApiSenado.get("/circuncripcion/nacional/senado",circuncripcionNacionalSenado.getMeListCircuncripcionNacionalSenado);
        this.routesApiSenado.get("/circuncripcion/nacional/senado/departamental/:idDepartment",circuncripcionNacionalSenado.getMeListCircuncripcionNacionalSenadoDepartamental);
        this.routesApiSenado.get("/circuncripcion/nacional/senado/departamental/:idDepartment/municipio/:idMunicipality",circuncripcionNacionalSenado.getMeListCircuncripcionNacionalSenadoDepartamentalMunicipal);
        this.routesApiSenado.get("/circuncripcion/nacional/elegidos",listControllerSenado.getMeListSenadoElegidos);
        this.routesApiSenado.get("/circuncripcion/indigena/elegidos",listControllerSenado.getMeListSenadoElegidosIndigena);

        this.routesApiSenado.get("/circuncripcion/indigena/senado",circuncripcionIndigenaSenado.getMeListCircuncripcionIndigenaSenado);
        this.routesApiSenado.get("/circuncripcion/indigena/senado/departamental/:idDepartment",circuncripcionIndigenaSenado.getMeListCircuncripcionIndigenaSenadoDepartamental);
        this.routesApiSenado.get("/circuncripcion/indigena/senado/departamental/:idDepartment/municipio/:idMunicipality",circuncripcionIndigenaSenado.getMeListCircuncripcionIndigenaSenadoDepartamentalMunicipal);
    }
}
const senadoRoutes = new SenadoRoutes();
export default senadoRoutes.routesApiSenado;