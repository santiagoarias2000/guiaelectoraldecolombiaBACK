import { SQL_PRESIDENCIA } from '../../repository/presidencia/sql_list_presidencia';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class PresidenciaSegunda extends ListDao{
    public getMePresidenciaSegunda(req:Request,res:Response):void{
        PresidenciaSegunda.getInfo(SQL_PRESIDENCIA.PRESIDENCIA_Y_VICEPRECIDENCIA_SEGUNDA,[],res);
    }
}
const presidenciaSegunda = new PresidenciaSegunda();
export default presidenciaSegunda;