"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class CircuncripcionEnElExterior extends ListDao_1.default {
    getMeListCircuncripcionEnElExterior(req, res) {
        // CircuncripcionEnElExterior.getInfoEspecific(SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_EN_EL_EXTERIOR_CAMARA,[],res);
    }
}
const circuncripcionEnElExterior = new CircuncripcionEnElExterior();
exports.default = circuncripcionEnElExterior;
