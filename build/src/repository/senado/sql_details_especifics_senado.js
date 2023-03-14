"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_SENADO = void 0;
exports.SQL_DETAILS_ESPECIFICS_SENADO = {
    CIRCUNCRIPCION_NACIONAL_SENADO: "SELECT distinct vt.description_politicparty as PARTIDO, vt.candidate_name as CANDIDATOS_SENADO,vt.description_role,vt.description_district,sum(vt.number_votes) as VOTOS, \
        jsonb_object(array['idDepartment',t3.name_department]) \
        FROM t3 \
        INNER JOIN t4 ON t3.candidate_name=t4.candidate_name AND t3.name_department = t4.name_department AND t3.code_role = t4.code_role AND t3.code_district = t4.code_district \
        INNER JOIN votes vt ON vt.candidate_name = t3.candidate_name AND t3.code_role = vt.code_role AND t3.code_district = vt.code_district \
        WHERE t3.code_role= 1 AND t3.code_district=0 AND t3.description_politicparty <> '\\N' \
        GROUP BY vt.candidate_name,vt.description_role,vt.description_politicparty, vt.description_district,t3.name_department \
        ORDER BY VOTOS DESC",
    CIRCUNCRIPCION_NACIONAL_SENADO_DEPARTAMENTAL: "SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS, t1.VOTOS AS VOTOSSSS,dp.name_department, \
        jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
        FROM votes vs \
        INNER JOIN department dp ON dp.id_department = vs.id_department \
        INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
        INNER JOIN ( \
            SELECT vt.description_politicparty,  vt.code_role, dep.id_department ,SUM(vt.number_votes) AS VOTOS \
            FROM votes vt \
            INNER JOIN department dep ON dep.id_department = vt.id_department \
            WHERE vt.code_role=1 AND vt.code_district=0	AND vt.description_politicparty <> '\\N' \
            GROUP BY vt.description_politicparty, vt.code_role,dep.id_department \
            ORDER BY VOTOS DESC \
        ) t1 ON t1.description_politicparty = vs.description_politicparty AND t1.id_department = dp.id_department \
        WHERE vs.code_role=1 AND dp.id_department=$1 AND vs.code_district=0	AND vs.description_politicparty <> '\\N' \
        GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district ,dp.id_department, dp.name_department, t1.VOTOS \
        ORDER BY t1.VOTOS DESC, VOTOS DESC",
    CIRCUNCRIPCION_NACIONAL_SENADO_MUNICIPAL: "SELECT vt.candidate_name,vt.description_politicparty,vt.description_role,vt.description_district,sum(vt.number_votes) as VOTOS, t3.votos, t4.votos AS votos_muicipio, \
        jsonb_object(array['idDepartment',t3.id_department,'name_department',t3.name_department]::TEXT[]) AS department, \
        jsonb_object(array['idMunicipality',t4.id_municipality,'name_municipality',t4.name_municipality]::TEXT[]) AS municipality \
        FROM t3 \
        INNER JOIN t4 ON t3.candidate_name=t4.candidate_name AND t3.name_department = t4.name_department AND t3.code_role = t4.code_role AND t3.code_district = t4.code_district \
        INNER JOIN votes vt ON vt.candidate_name = t3.candidate_name AND t3.code_role = vt.code_role AND t3.code_district = vt.code_district \
        INNER JOIN ( \
                SELECT vt.description_politicparty,  vt.code_role, dep.id_department ,SUM(vt.number_votes) AS VOTOS \
                FROM votes vt \
                INNER JOIN department dep ON dep.id_department = vt.id_department \
                WHERE vt.code_role=1 AND vt.code_district=0	AND vt.description_politicparty <> '\\N' \
                GROUP BY vt.description_politicparty, vt.code_role,dep.id_department \
                ORDER BY VOTOS DESC \
            ) t1 ON t1.description_politicparty = vt.description_politicparty AND t1.id_department = t3.id_department \
        WHERE t3.code_role= 1 AND t3.code_district=0 AND t3.id_department=$1 AND t4.id_municipality=$2 \
        GROUP BY vt.candidate_name,vt.description_role,vt.description_politicparty, vt.description_district,t3.id_department,t3.name_department,t4.id_municipality,t4.name_municipality, t3.votos, t4.votos, t1.VOTOS \
        ORDER BY t1.VOTOS DESC,t4.votos DESC ",
    CIRCUNCRIPCION_INDIGENA_SENADO_DEPARTAMENTAL: "SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS, t1.VOTOS AS VOTOSSSS,dp.name_department, \
        jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
        FROM votes vs \
        INNER JOIN department dp ON dp.id_department = vs.id_department \
        INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
        INNER JOIN ( \
            SELECT vt.description_politicparty,  vt.code_role, dep.id_department ,SUM(vt.number_votes) AS VOTOS \
            FROM votes vt \
            INNER JOIN department dep ON dep.id_department = vt.id_department \
            WHERE vt.code_role=1 AND vt.code_district=4	AND vt.description_politicparty <> '\\N' \
            GROUP BY vt.description_politicparty, vt.code_role,dep.id_department \
            ORDER BY VOTOS DESC \
        ) t1 ON t1.description_politicparty = vs.description_politicparty AND t1.id_department = dp.id_department \
        WHERE vs.code_role=1 AND dp.id_department=$1 AND vs.code_district=4	AND vs.description_politicparty <> '\\N' \
        GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district ,dp.id_department, dp.name_department, t1.VOTOS \
        ORDER BY t1.VOTOS DESC, VOTOS DESC",
    CIRCUNCRIPCION_INDIGENA_SENADO_DEPARTAMENTAL_MUNICIPAL: "SELECT vt.candidate_name,vt.description_politicparty,vt.description_role,vt.description_district,sum(vt.number_votes) as VOTOS, t3.votos, t4.votos AS votos_muicipio, \
        jsonb_object(array['idDepartment',t3.id_department,'name_department',t3.name_department]::TEXT[]) AS department, \
        jsonb_object(array['idMunicipality',t4.id_municipality,'name_municipality',t4.name_municipality]::TEXT[]) AS municipality \
        FROM t3 \
        INNER JOIN t4 ON t3.candidate_name=t4.candidate_name AND t3.name_department = t4.name_department AND t3.code_role = t4.code_role AND t3.code_district = t4.code_district \
        INNER JOIN votes vt ON vt.candidate_name = t3.candidate_name AND t3.code_role = vt.code_role AND t3.code_district = vt.code_district \
        INNER JOIN ( \
                SELECT vt.description_politicparty,  vt.code_role, dep.id_department ,SUM(vt.number_votes) AS VOTOS \
                FROM votes vt \
                INNER JOIN department dep ON dep.id_department = vt.id_department \
                WHERE vt.code_role=1 AND vt.code_district=4	AND vt.description_politicparty <> '\\N' \
                GROUP BY vt.description_politicparty, vt.code_role,dep.id_department \
                ORDER BY VOTOS DESC \
            ) t1 ON t1.description_politicparty = vt.description_politicparty AND t1.id_department = t3.id_department \
        WHERE t3.code_role= 1 AND t3.code_district=4 AND t3.id_department=$1 AND t4.id_municipality=$2 \
        GROUP BY vt.candidate_name,vt.description_role,vt.description_politicparty, vt.description_district,t3.id_department,t3.name_department,t4.id_municipality,t4.name_municipality, t3.votos, t4.votos, t1.VOTOS \
        ORDER BY t1.VOTOS DESC,t4.votos DESC ",
};
