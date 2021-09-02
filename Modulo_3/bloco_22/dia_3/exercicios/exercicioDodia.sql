-- Desafios sobre VIEW
-- 1) Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila .
-- Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo.
-- Os resultados devem ser ordenados pelo título do filme.
USE sakila;
CREATE VIEW film_with_categories AS
    SELECT f.title AS title, fc.category_id AS category_id, c.`name` AS 'name'
    FROM sakila.film AS f
    INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c ON c.category_id = fc.category_id
    ORDER BY f.title;
    
SELECT * FROM film_with_categories;

-- 2) Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila .
-- Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes.
-- Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
USE sakila;
CREATE VIEW film_info AS
    SELECT a.actor_id AS actor_id, CONCAT(a.first_name,' ', a.last_name) AS 'actor',
    f.title AS 'title'
    FROM sakila.actor AS a
    INNER JOIN sakila.film_actor AS fa ON fa.actor_id = a.actor_id
    INNER JOIN sakila.film AS f ON f.film_id = fa.film_id
    ORDER BY `actor`;
    
SELECT * FROM film_info;

-- 3) Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . 
-- Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados
-- pelo nome das cidades. Use a imagem abaixo como referência.

USE sakila;
CREATE VIEW address_info AS
    SELECT a.address_id, a.address, a.district, a.city_id, c.city
    FROM sakila.address a
    INNER JOIN sakila.city c ON c.city_id = a.city_id
    ORDER BY c.city;
    
SELECT * FROM address_info;

-- 4) Exercício 4: Crie uma view chamada movies_languages , usando as tabelas film e language
-- do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma
-- e o idioma do filme , como na imagem a seguir.

USE sakila;
CREATE VIEW movies_languages AS
    SELECT f.title, f.language_id, l.`name`
    FROM sakila.film f
    INNER JOIN sakila.`language` l ON l.language_id = f.language_id;
    
SELECT * FROM movies_languages;


-- Desafios sobre INDEX

-- 1) Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name .
-- Após ter criado o índice, mensure o custo com a seguinte query:
CREATE FULLTEXT INDEX index_category_name ON category(name);
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores.
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- Query cost : 0.35
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
DROP INDEX index_category_name ON category;
-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- Query cost : 1.85

-- 2) Exercício 2: Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code .
-- Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores.
-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE INDEX index_postal_code ON address(postal_code);

-- Mensure o custo com index a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost : 0.95

-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
DROP INDEX index_postal_code ON address;
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost : 65.40

-- Desafios sobre ALTER TABLE
-- 1) Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address ,
-- mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);
-- 2)Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo
-- e tamanho de dados.
ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25);

-- 3) Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo
-- e tamanho de dados.
ALTER TABLE countries CHANGE COLUMN country_name country VARCHAR(40);
