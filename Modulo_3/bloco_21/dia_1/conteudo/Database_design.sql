-- Database Design - Como modelar um banco de dados
-- Hora de mexer os dedos
-- Tente, com a ajuda do material de hoje:
-- Identificar as entidades, atributos e relacionamentos.
-- Solução
-- Identificação das Entidades :
-- Entidade 1: Álbum ;
-- Entidade 2: Artista ;
-- Entidade 3: Estilo Musical ;
-- Entidade 4: Canção ;
-- Identificação dos Atributos :
-- Álbum: album_id , titulo , preco , estilo_id e artista_id ;
-- Artista: artista_id e nome ;
-- Estilo Musical: estilo_id e nome ;
-- Canção: cancao_id , nome e album_id ;
-- Identificação dos Relacionamentos :
-- Um artista pode possuir um ou mais álbuns;
-- Um estilo musical pode estar contido em um ou mais álbuns;
-- Um álbum pode possuir uma ou mais canções;

    DROP SCHEMA IF EXISTS Albuns;
    CREATE SCHEMA Albuns;
    USE Albuns;

    CREATE TABLE artista(
        artista_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE estilo_musical(
        estilo_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE album(
        album_id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(50) NOT NULL,
        preço INT NOT NULL,
        estilo_id INT NOT NULL,
        artista_id INT NOT NULL,
        FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id),
        FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
    );

    CREATE TABLE cancao(
        cancao_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        album_id INT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES album (album_id)
    );
