import { SQL_TO_LIST_SENADO } from './../../repository/senado/sql_toList_Senado';
import { SQL_DETAILS_ESPECIFICS_SENADO } from './../../repository/senado/sql_details_especifics_senado';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionNacionalSenado extends ListDao{
    public getMeListCircuncripcionNacionalSenado(req:Request,res: Response):void{
        CircuncripcionNacionalSenado.getInfo(SQL_TO_LIST_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO,[],res);
    }
    public getMeListCircuncripcionNacionalSenadoDepartamental(req:Request,res: Response):void{
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        CircuncripcionNacionalSenado.getInfoEspecific(SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO_DEPARTAMENTAL,parametro,res);
    }
    public getMeListCircuncripcionNacionalSenadoDepartamentalMunicipal(req:Request,res: Response):void{
        const id_department = req.params.idDepartment;
        const id_municipality= req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        CircuncripcionNacionalSenado.getInfoEspecific(SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO_MUNICIPAL,parametro,res);
    }
}
const circuncripcionNacionalSenado = new CircuncripcionNacionalSenado();
export default circuncripcionNacionalSenado;