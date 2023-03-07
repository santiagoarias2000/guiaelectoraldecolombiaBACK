import { SQL_TO_LIST_SENADO } from './../../repository/senado/sql_toList_Senado';
import { SQL_DETAILS_ESPECIFICS_SENADO } from '../../repository/senado/sql_details_especifics_senado';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionIndigenaSenado extends ListDao{
    public getMeListCircuncripcionIndigenaSenado(req:Request,res: Response):void{
        CircuncripcionIndigenaSenado.getInfo(SQL_TO_LIST_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO,[],res);
    }
    public getMeListCircuncripcionIndigenaSenadoDepartamental(req:Request,res: Response):void{
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionIndigenaSenado.getInfoEspecific(SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO_DEPARTAMENTAL,parametro,res);
    }
    public getMeListCircuncripcionIndigenaSenadoDepartamentalMunicipal(req:Request,res: Response):void{
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionIndigenaSenado.getInfoEspecific(SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO_DEPARTAMENTAL_MUNICIPAL,parametro,res);
    }
}
const circuncripcionIndigenaSenado = new CircuncripcionIndigenaSenado();
export default circuncripcionIndigenaSenado;