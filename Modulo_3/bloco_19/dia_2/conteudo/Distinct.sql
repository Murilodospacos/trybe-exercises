-- Dados repetidos? Aqui Não! Como usar o DISTINCT
-- Feito isso, você terá acesso à tabela Alunos do banco de dados Escola . Levando em conta a explicação que você acabou de ver, como você montaria uma query para encontrar os seguintes dados?

-- 1 Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;

-- 2 Quantas linhas vocês encontraria no query anterior?
-- 5

-- 3 Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Alunos;

-- 4 Quantas linhas você encontraria no query anterior?
-- 4

-- 5 Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade FROM Escola.Alunos;

-- 6 Quantas linhas você encontraria na query anterior?
-- 4 


