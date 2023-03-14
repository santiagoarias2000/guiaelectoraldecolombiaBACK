"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_toList_Senado_1 = require("../../repository/senado/sql_toList_Senado");
class ListControllerSenado extends ListDao_1.default {
    getMeListSenadoElegidos(req, res) {
        ListControllerSenado.getInfo(sql_toList_Senado_1.SQL_TO_LIST_SENADO.LIST_ELEGIDOS_SENADO_NACIOAL, [], res);
    }
    getMeListSenadoElegidosIndigena(req, res) {
        ListControllerSenado.getInfo(sql_toList_Senado_1.SQL_TO_LIST_SENADO.LISTA_ELEGIDOS_SENADO_INDIGENA, [], res);
    }
}
const listControllerSenado = new ListControllerSenado();
exports.default = listControllerSenado;
