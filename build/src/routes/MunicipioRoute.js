"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MunicipioController_1 = __importDefault(require("../controller/municipio/MunicipioController"));
class MunicipioRoutes {
    constructor() {
        this.routeApiMunicipio = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routeApiMunicipio.get("/:idDepartment", MunicipioController_1.default.getMeListDepartment);
        this.routeApiMunicipio.get("/one/:idMunicipality", MunicipioController_1.default.getMeMunicipio);
    }
}
const municipioRoutes = new MunicipioRoutes();
exports.default = municipioRoutes.routeApiMunicipio;
