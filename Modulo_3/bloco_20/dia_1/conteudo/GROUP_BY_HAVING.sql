-- 1 - Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
  SELECT rating, AVG(length) AS media_especifica
    FROM sakila.film
    GROUP BY rating
    HAVING media_especifica BETWEEN 115.0 AND 121.50
    ORDER BY media_especifica DESC;
-- 2 - 2. Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
    SELECT rating, SUM(replacement_cost) AS custo_substituicao
    FROM sakila.film
    GROUP by rating
    HAVING custo_substituicao > 3950.50
    ORDER BY custo_substituicao ASC;