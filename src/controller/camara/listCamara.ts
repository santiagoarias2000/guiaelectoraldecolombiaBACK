import { Request, Response} from 'express';
import { SQL_TO_LIST_CAMARA } from '../../repository/camara/sql_toList_Camara';
import ListDao from "../../dao/ListDao"

class ListControllerCamara extends ListDao{
    public getMeListCamaraTerritorial(req:Request,res:Response):void{
        //console.log(req.body);
        //const paginaActual = req.body.paginaActual;
        //const cantidadMostrar = req.body.cantidadMostrar;
        //const valorRegistro = ((paginaActual-1)*cantidadMostrar);
        //const parametros = [cantidadMostrar, valorRegistro];
        ListControllerCamara.getInfo(SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_TERRITORIAL,[],res);
    }

    /* public getMeCountDepartments(req:Request,res:Response):void{
        ListControllerCamara.getCantidadDepartamentos(SQL_TO_LIST_CAMARA.COUNT_CAMARA_DEP_TERR,[],res);
    } */

    
    public getMeListCamaraIndigena(req:Request,res:Response):void{
        ListControllerCamara.getInfo(SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_INDIGENA,[],res);
    }
    
    public getMeListCamaraAfroDescendiente(req:Request,res:Response):void{
        ListControllerCamara.getInfo(SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_AFRO_DESCENDIENTE,[],res);
    }
}
const listControllerCamara = new ListControllerCamara();
export default listControllerCamara;