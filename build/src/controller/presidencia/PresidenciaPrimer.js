"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_list_presidencia_1 = require("./../../repository/presidencia/sql_list_presidencia");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class PresidenciaPrimer extends ListDao_1.default {
    getMePresidenciaPrimer(req, res) {
        PresidenciaPrimer.getInfo(sql_list_presidencia_1.SQL_PRESIDENCIA.PRESIDENCIA_Y_VICEPRECIDENCIA_PRIMERA, [], res);
    }
}
const presidenciaPrimer = new PresidenciaPrimer();
exports.default = presidenciaPrimer;
