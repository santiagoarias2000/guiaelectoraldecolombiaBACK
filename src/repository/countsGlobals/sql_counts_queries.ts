export const SQL_COUNTS_QUERIES = {
    TOTAL_VOTOS:'SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,sum(vs.number_votes) as VOTOS FROM votes vs WHERE vs.code_role=1 GROUP BY vs.candidate_name,vs.description_politicparty,vs.description_role ORDER BY SUM(vs.number_votes) DESC'
}