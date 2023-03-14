"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TO_LIST_SENADO = void 0;
exports.SQL_TO_LIST_SENADO = {
    CIRCUNCRIPCION_NACIONAL_SENADO: "SELECT dp.id_department,dp.name_department, vs.description_district,vs.description_role,sum(vs.number_votes) as votos, \
        jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
        FROM votes vs \
        INNER JOIN department dp ON dp.id_department = vs.id_department \
        WHERE vs.code_district=0 AND vs.code_role=1 \
        GROUP BY dp.id_department,dp.name_department, vs.description_district, vs.description_role \
        ORDER BY dp.name_department ASC",
    CIRCUNCRIPCION_INDIGENA_SENADO: "SELECT dp.id_department,dp.name_department, vs.description_district,vs.description_role,sum(vs.number_votes) as votos, \
        jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
        FROM votes vs \
        INNER JOIN department dp ON dp.id_department = vs.id_department \
        WHERE vs.code_district= 4 AND vs.code_role= 1 \
        GROUP BY dp.id_department,dp.name_department, vs.description_district, vs.description_role \
        ORDER BY dp.name_department ASC",
    LIST_ELEGIDOS_SENADO_NACIOAL: "SELECT distinct vt.candidate_name as candidate_name,vt.description_politicparty as description_politicparty,vt.description_role,vt.description_district,sum(vt.number_votes) as VOTOS, dep.name_department, t1.maximo as max_votes,\
    jsonb_object(array['idDepartment',dep.id_department,'name_department',dep.name_department]::TEXT[]) AS department \
    FROM t1 \
    INNER JOIN t2 ON t1.maximo = t2.votos and t1.candidate_name=t2.candidate_name \
    INNER JOIN department dep ON dep.id_department = t2.id_department \
    INNER JOIN votes vt ON vt.candidate_name = t1.candidate_name \
    WHERE vt.code_role=1 and vt.code_district=0 and vt.candidate_name <> '\\N' \
    GROUP BY vt.candidate_name,vt.description_role,vt.description_politicparty, vt.description_district,dep.id_department,dep.name_department, t1.maximo \
    ORDER BY  sum(vt.number_votes)  desc limit 100",
    LISTA_ELEGIDOS_SENADO_INDIGENA: "SELECT distinct vt.candidate_name as candidate_name,vt.description_politicparty as description_politicparty,vt.description_role,vt.description_district,sum(vt.number_votes) as VOTOS, dep.name_department, t1.maximo as max_votes, \
    jsonb_object(array['idDepartment',dep.id_department,'name_department',dep.name_department]::TEXT[]) AS department \
    FROM t1 \
    INNER JOIN t2 ON t1.maximo = t2.votos and t1.candidate_name=t2.candidate_name \
    INNER JOIN department dep ON dep.id_department = t2.id_department \
    INNER JOIN votes vt ON vt.candidate_name = t1.candidate_name \
    WHERE vt.code_role=1 and vt.code_district=4 and vt.candidate_name <> '\\N' \
    GROUP BY vt.candidate_name,vt.description_role,vt.description_politicparty, vt.description_district,dep.id_department,dep.name_department, t1.maximo \
    ORDER BY  sum(vt.number_votes)  desc limit 2",
};
