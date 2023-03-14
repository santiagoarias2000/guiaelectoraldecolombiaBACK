"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_Senado_1 = require("./../../repository/senado/sql_toList_Senado");
const sql_details_especifics_senado_1 = require("./../../repository/senado/sql_details_especifics_senado");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class CircuncripcionNacionalSenado extends ListDao_1.default {
    getMeListCircuncripcionNacionalSenado(req, res) {
        CircuncripcionNacionalSenado.getInfo(sql_toList_Senado_1.SQL_TO_LIST_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO, [], res);
    }
    getMeListCircuncripcionNacionalSenadoDepartamental(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionNacionalSenado.getInfoEspecific(sql_details_especifics_senado_1.SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO_DEPARTAMENTAL, parametro, res);
    }
    getMeListCircuncripcionNacionalSenadoDepartamentalMunicipal(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionNacionalSenado.getInfoEspecific(sql_details_especifics_senado_1.SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO_MUNICIPAL, parametro, res);
    }
}
const circuncripcionNacionalSenado = new CircuncripcionNacionalSenado();
exports.default = circuncripcionNacionalSenado;
