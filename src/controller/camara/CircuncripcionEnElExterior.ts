import { SQL_DETAILS_ESPECIFICS_CAMARA } from '../../repository/camara/sql_details_especifics_camara';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionEnElExterior extends ListDao{
    public getMeListCircuncripcionEnElExterior(req:Request,res: Response):void{
       // CircuncripcionEnElExterior.getInfoEspecific(SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_EN_EL_EXTERIOR_CAMARA,[],res);
    }
}
const circuncripcionEnElExterior = new CircuncripcionEnElExterior();
export default circuncripcionEnElExterior;