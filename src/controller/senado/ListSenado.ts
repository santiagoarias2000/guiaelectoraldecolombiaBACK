import { Request } from 'express';
import { Response } from 'express';
import ListDao from "../../dao/ListDao";
import { SQL_TO_LIST_SENADO } from '../../repository/senado/sql_toList_Senado';

class ListControllerSenado extends ListDao{
    public getMeListSenadoElegidos(req: Request, res: Response):void{
        ListControllerSenado.getInfo(SQL_TO_LIST_SENADO.LIST_ELEGIDOS_SENADO_NACIOAL,[],res);
    }
    public getMeListSenadoElegidosIndigena(req: Request, res: Response):void{
        ListControllerSenado.getInfo(SQL_TO_LIST_SENADO.LISTA_ELEGIDOS_SENADO_INDIGENA,[],res);
    }
}
const listControllerSenado = new ListControllerSenado();
export default listControllerSenado;