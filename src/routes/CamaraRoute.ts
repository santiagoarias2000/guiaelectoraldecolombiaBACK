import { Router } from "express";
import circuncripcionAfrodecendientesCamara from "../controller/camara/CircuncripcionAfrodecendientes";
import circuncripcionRegionalCamara from "../controller/camara/CircuncripcionTerritorial";
import circuncripcionIndigenaCamara from "../controller/camara/CircuncripcionIndigena";
import curualesDePaz from "../controller/camara/CurualesDePaz";
import listControllerCamara from "../controller/camara/listCamara";
import circuncripcionEnElExterior from "../controller/camara/CircuncripcionEnElExterior";
import circuncripcionTerritorialCamara from "../controller/camara/CircuncripcionTerritorial";

class CamaraRoutes {
    public routesApiCamara: Router;
    constructor() {
        this.routesApiCamara = Router();
        this.setting();
    }
    public setting() {
        
        this.routesApiCamara.get("/territorial",listControllerCamara.getMeListCamaraTerritorial);
        //this.routesApiCamara.get("/cantidadTerritorial",listControllerCamara.getMeCountDepartments);

        this.routesApiCamara.get("/indigena",listControllerCamara.getMeListCamaraIndigena);
        this.routesApiCamara.get("/afrodescendiente",listControllerCamara.getMeListCamaraAfroDescendiente);
        
        this.routesApiCamara.get("/circuncripcion/territorial/departamento/:idDepartment",circuncripcionTerritorialCamara.getMeListCircuncripcionTerritorialCamaraDepartamento);
        this.routesApiCamara.get("/circuncripcion/indigena/departamento/:idDepartment",circuncripcionIndigenaCamara.getMeListCircuncripcionIndigenaCamaraDepartamento);
        this.routesApiCamara.get("/circuncripcion/afrodescendiente/departamento/:idDepartment",circuncripcionAfrodecendientesCamara.getMeListCircuncripcionAfroDescendienteCamaraDepartamento);
        
        
        this.routesApiCamara.get("/circuncripcion/territorial/departamento/:idDepartment/municipio/:idMunicipality",circuncripcionTerritorialCamara.getMeListCircuncripcionTerritorialCamaraDepartamentoMunicipio);
        this.routesApiCamara.get("/circuncripcion/indigena/departamento/:idDepartment/municipio/:idMunicipality",circuncripcionIndigenaCamara.getMeListCircuncripcionIndigenaCamaraDepartamentoMunicipio);
        this.routesApiCamara.get("/circuncripcion/afrodescendiente/departamento/:idDepartment/municipio/:idMunicipality",circuncripcionAfrodecendientesCamara.getMeListCircuncripcionAfroDescendienteCamaraDepartamentoMunicipio);
        
    }
}
const camaraRoutes = new CamaraRoutes();
export default camaraRoutes.routesApiCamara;