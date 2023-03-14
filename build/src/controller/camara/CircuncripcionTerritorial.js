"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_details_especifics_camara_1 = require("../../repository/camara/sql_details_especifics_camara");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class CircuncripcionTerritorialCamara extends ListDao_1.default {
    getMeListCircuncripcionTerritorialCamara(req, res) {
        CircuncripcionTerritorialCamara.getInfo(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO, [], res);
    }
    getMeListCircuncripcionTerritorialCamaraDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionTerritorialCamara.getInfoEspecific(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO, parametro, res);
    }
    getMeListCircuncripcionTerritorialCamaraDepartamentoMunicipio(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionTerritorialCamara.getInfoEspecific(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res);
    }
}
const circuncripcionTerritorialCamara = new CircuncripcionTerritorialCamara();
exports.default = circuncripcionTerritorialCamara;
