import { SQL_DETAILS_ESPECIFICS_CAMARA } from '../../repository/camara/sql_details_especifics_camara';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CurualesDePaz extends ListDao{
    public getMeListCurualesDePaz(req:Request,res: Response):void{
        //CurualesDePaz.getInfo(SQL_DETAILS_ESPECIFICS_CAMARA.CURULES_DE_PAZ_CAMARA,[],res);
    }
}
const curualesDePaz = new CurualesDePaz();
export default curualesDePaz;