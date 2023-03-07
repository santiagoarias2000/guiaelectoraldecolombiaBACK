import { SQL_PRESIDENCIA } from './../../repository/presidencia/sql_list_presidencia';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class PresidenciaPrimer extends ListDao{
    public getMePresidenciaPrimer(req:Request,res:Response):void{
        PresidenciaPrimer.getInfo(SQL_PRESIDENCIA.PRESIDENCIA_Y_VICEPRECIDENCIA_PRIMERA,[],res);
    }
}
const presidenciaPrimer = new PresidenciaPrimer();
export default presidenciaPrimer;