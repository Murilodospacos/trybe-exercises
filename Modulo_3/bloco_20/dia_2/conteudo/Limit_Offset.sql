-- LIMIT OFFSET - Pulando linhas desnecessárias
-- Tranquilo, não é? Agora, olhando a resultado a seguir, qual query eu teria que montar para trazer os 10 primeiros resultados, a partir da JOHNNY?

SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;