"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_details_especifics_camara_1 = require("./../../repository/camara/sql_details_especifics_camara");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class CircuncripcionIndigenaCamara extends ListDao_1.default {
    getMeListCircuncripcionIndigenaCamaraDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionIndigenaCamara.getInfoEspecific(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO, parametro, res);
    }
    getMeListCircuncripcionIndigenaCamaraDepartamentoMunicipio(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionIndigenaCamara.getInfoEspecific(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res);
    }
}
const circuncripcionIndigenaCamara = new CircuncripcionIndigenaCamara();
exports.default = circuncripcionIndigenaCamara;
