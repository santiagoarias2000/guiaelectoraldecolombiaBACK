"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_list_municipio_1 = require("./../../repository/municipio/sql_list_municipio");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class MunicipioController extends ListDao_1.default {
    getMeListDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        MunicipioController.getInfo(sql_list_municipio_1.SQL_MUNICIPIO.LIST_MUNICIPIO, parametro, res);
    }
    getMeMunicipio(req, res) {
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_municipality];
        MunicipioController.getInfo(sql_list_municipio_1.SQL_MUNICIPIO.ONE_MUNICIPALITY, parametro, res);
    }
}
const municipioController = new MunicipioController();
exports.default = municipioController;
