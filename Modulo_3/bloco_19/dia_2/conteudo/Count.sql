-- Contando resultados com o COUNT
-- Essa é a tabela staff do banco de dados sakila . Como você poderia responder às seguintes questões?

-- 1 Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(`password`) FROM sakila.staff;

-- 2 Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(*) FROM sakila.staff;

-- 3 Quantos emails temos cadastradas nessa tabela?
SELECT COUNT(email) FROM sakila.staff;