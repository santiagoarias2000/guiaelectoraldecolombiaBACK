"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_list_departamento_1 = require("./../../repository/departamento/sql_list_departamento");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class DepartamentoController extends ListDao_1.default {
    getMeListDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT, parametro, res);
    }
}
const departamentoController = new DepartamentoController();
exports.default = departamentoController;
