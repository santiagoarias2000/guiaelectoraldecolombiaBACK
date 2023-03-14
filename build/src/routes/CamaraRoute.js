"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CircuncripcionAfrodecendientes_1 = __importDefault(require("../controller/camara/CircuncripcionAfrodecendientes"));
const CircuncripcionIndigena_1 = __importDefault(require("../controller/camara/CircuncripcionIndigena"));
const listCamara_1 = __importDefault(require("../controller/camara/listCamara"));
const CircuncripcionTerritorial_1 = __importDefault(require("../controller/camara/CircuncripcionTerritorial"));
class CamaraRoutes {
    constructor() {
        this.routesApiCamara = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCamara.get("/territorial", listCamara_1.default.getMeListCamaraTerritorial);
        //this.routesApiCamara.get("/cantidadTerritorial",listControllerCamara.getMeCountDepartments);
        this.routesApiCamara.get("/indigena", listCamara_1.default.getMeListCamaraIndigena);
        this.routesApiCamara.get("/afrodescendiente", listCamara_1.default.getMeListCamaraAfroDescendiente);
        this.routesApiCamara.get("/circuncripcion/territorial/departamento/:idDepartment", CircuncripcionTerritorial_1.default.getMeListCircuncripcionTerritorialCamaraDepartamento);
        this.routesApiCamara.get("/circuncripcion/indigena/departamento/:idDepartment", CircuncripcionIndigena_1.default.getMeListCircuncripcionIndigenaCamaraDepartamento);
        this.routesApiCamara.get("/circuncripcion/afrodescendiente/departamento/:idDepartment", CircuncripcionAfrodecendientes_1.default.getMeListCircuncripcionAfroDescendienteCamaraDepartamento);
        this.routesApiCamara.get("/circuncripcion/territorial/departamento/:idDepartment/municipio/:idMunicipality", CircuncripcionTerritorial_1.default.getMeListCircuncripcionTerritorialCamaraDepartamentoMunicipio);
        this.routesApiCamara.get("/circuncripcion/indigena/departamento/:idDepartment/municipio/:idMunicipality", CircuncripcionIndigena_1.default.getMeListCircuncripcionIndigenaCamaraDepartamentoMunicipio);
        this.routesApiCamara.get("/circuncripcion/afrodescendiente/departamento/:idDepartment/municipio/:idMunicipality", CircuncripcionAfrodecendientes_1.default.getMeListCircuncripcionAfroDescendienteCamaraDepartamentoMunicipio);
    }
}
const camaraRoutes = new CamaraRoutes();
exports.default = camaraRoutes.routesApiCamara;
