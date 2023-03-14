"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListSenado_1 = __importDefault(require("../controller/senado/ListSenado"));
const CircuncripcionIndigena_1 = __importDefault(require("../controller/senado/CircuncripcionIndigena"));
const CircuncripcionNacional_1 = __importDefault(require("../controller/senado/CircuncripcionNacional"));
class SenadoRoutes {
    constructor() {
        this.routesApiSenado = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiSenado.get("/circuncripcion/nacional/senado", CircuncripcionNacional_1.default.getMeListCircuncripcionNacionalSenado);
        this.routesApiSenado.get("/circuncripcion/nacional/senado/departamental/:idDepartment", CircuncripcionNacional_1.default.getMeListCircuncripcionNacionalSenadoDepartamental);
        this.routesApiSenado.get("/circuncripcion/nacional/senado/departamental/:idDepartment/municipio/:idMunicipality", CircuncripcionNacional_1.default.getMeListCircuncripcionNacionalSenadoDepartamentalMunicipal);
        this.routesApiSenado.get("/circuncripcion/nacional/elegidos", ListSenado_1.default.getMeListSenadoElegidos);
        this.routesApiSenado.get("/circuncripcion/indigena/elegidos", ListSenado_1.default.getMeListSenadoElegidosIndigena);
        this.routesApiSenado.get("/circuncripcion/indigena/senado", CircuncripcionIndigena_1.default.getMeListCircuncripcionIndigenaSenado);
        this.routesApiSenado.get("/circuncripcion/indigena/senado/departamental/:idDepartment", CircuncripcionIndigena_1.default.getMeListCircuncripcionIndigenaSenadoDepartamental);
        this.routesApiSenado.get("/circuncripcion/indigena/senado/departamental/:idDepartment/municipio/:idMunicipality", CircuncripcionIndigena_1.default.getMeListCircuncripcionIndigenaSenadoDepartamentalMunicipal);
    }
}
const senadoRoutes = new SenadoRoutes();
exports.default = senadoRoutes.routesApiSenado;
