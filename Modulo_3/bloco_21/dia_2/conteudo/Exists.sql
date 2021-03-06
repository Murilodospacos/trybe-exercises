-- Exercício 1: Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
    id, title
FROM
    hotel.Books AS b
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id);
);

-- Exercício 2: Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contem a palavra "lost" no título.
SELECT 
    id, title
FROM
    hotel.Books b
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id AND b.title LIKE '%lost%');

-- Exercício 3: Usando a tabela carsales e customer , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    name
FROM
    hotel.Customers c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            customerid = c.customerid);

-- Exercício 4: Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customer e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);




