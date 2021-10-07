-- 1 - Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SET @number = 15;
SELECT @number, IF ( @number MOD 2 = 0, 'É par', 'É impar')
AS 'Par ou Ímpar';
-- É impar

-- 2 - Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;
-- 18

-- 3 - Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;
-- RESTA 4 
