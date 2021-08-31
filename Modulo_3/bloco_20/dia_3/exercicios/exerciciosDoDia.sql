-- 1 Escreva uma query para exibir todas as peças que começam com GR . Solução:
SELECT * FROM PecasFornecedores.Pecas
WHERE `name` LIKE 'GR%';

-- 2 Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2.
-- Organize o resultado por ordem alfabética de fornecedor. Solução:
SELECT Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- 3 Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que 
-- o código do fornecedor tenha a letra N . Solução:
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- 4 Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
-- Ordene os resultados em ordem alfabética decrescente.
SELECT * FROM PecasFornecedores.Fornecedores
WHERE `name` LIKE '%LTDA'
ORDER BY `name` DESC;

-- 5 Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código. Solução:
SELECT COUNT(*) Filtro_Numero_Empresas FROM PecasFornecedores.Fornecedores
WHERE `code` LIKE '%F%';

-- 6 Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 .
-- Ordene os resultados por ordem crescente. Solução:
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

-- 7 Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 . Solução:
SELECT COUNT(*) Numero_Vendas FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-05-15' AND '2019-07-30';
