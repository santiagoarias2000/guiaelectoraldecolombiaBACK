"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_details_especifics_camara_1 = require("../../repository/camara/sql_details_especifics_camara");
class CircuncripcionAfrodecendientesCamara extends ListDao_1.default {
    getMeListCircuncripcionAfroDescendienteCamaraDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionAfrodecendientesCamara.getInfoEspecific(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO, parametro, res);
    }
    getMeListCircuncripcionAfroDescendienteCamaraDepartamentoMunicipio(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionAfrodecendientesCamara.getInfoEspecific(sql_details_especifics_camara_1.SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res);
    }
}
const circuncripcionAfrodecendientesCamara = new CircuncripcionAfrodecendientesCamara();
exports.default = circuncripcionAfrodecendientesCamara;
