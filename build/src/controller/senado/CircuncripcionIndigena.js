"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_Senado_1 = require("./../../repository/senado/sql_toList_Senado");
const sql_details_especifics_senado_1 = require("../../repository/senado/sql_details_especifics_senado");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class CircuncripcionIndigenaSenado extends ListDao_1.default {
    getMeListCircuncripcionIndigenaSenado(req, res) {
        CircuncripcionIndigenaSenado.getInfo(sql_toList_Senado_1.SQL_TO_LIST_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO, [], res);
    }
    getMeListCircuncripcionIndigenaSenadoDepartamental(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionIndigenaSenado.getInfoEspecific(sql_details_especifics_senado_1.SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO_DEPARTAMENTAL, parametro, res);
    }
    getMeListCircuncripcionIndigenaSenadoDepartamentalMunicipal(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionIndigenaSenado.getInfoEspecific(sql_details_especifics_senado_1.SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO_DEPARTAMENTAL_MUNICIPAL, parametro, res);
    }
}
const circuncripcionIndigenaSenado = new CircuncripcionIndigenaSenado();
exports.default = circuncripcionIndigenaSenado;
