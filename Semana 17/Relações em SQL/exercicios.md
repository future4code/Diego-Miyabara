# Exercício 1

a) Chave estrangeira é uma forma de informar que a uma propriedade que está presente em uma outra tabela.

b) 
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
	"01",
    "Excelente filme, ótima direção, imagem sensacional e trilha sonora também!",
    9,
    "004"
);

c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-diego-miyabara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Não é possível adicionar pois o movie_id que está ligado ao id da tabela Movies não existe. Ou seja, a chave estrangeira está obrigado a inserir um movie_id de um id que exista na tabela Movies.

d)
ALTER TABLE Movies 
DROP COLUMN rating;

e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-diego-miyabara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
Não foi possivel deletar ou alterar a linha pois a chave estrangeira está linkando a uma outra tabela, desta maneira precisamos deletar a tabela que está com a foreign key pra depois deletar ela.

# Exercício 2

a) Esta tabela esta relacionando os filmes e os atores, ou seja, atrelando com a foreign key os filmes e os atores pelo seu correspondente id.

b)
INSERT INTO MovieCast VALUES
("004", "006"),("005", "005"),("005","004"),("003","001"),("001", "001"),("001","002");

c) 
INSERT INTO MovieCast VALUES 
("009", "001");
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-diego-miyabara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
Ele informa que não existe um o Id informado na tabela Movies.

d)
DELETE FROM Actor WHERE
	id = "001";
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-diego-miyabara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Ele informa que existe uma chave estrangeira atrelada à tabela MovieCast que impede de fazer a exclusão.

# Exercício 3

a) A query está pegando todas as informações da tabela Movie e adicionando a informação da tabela Rating porém somente as que o Id da tabela Movie for igual ao movie_id da tabela Rating.

b)
SELECT title, movie_id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

# Exercício 4

a)
SELECT Movies.id as movie_id, Movies.title, Rating.rate, Rating.comment as rating_comment
FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id;

b)
SELECT Movies.id as movie_id, title, MovieCast.actor_id 
FROM Movies
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movies.id;

c)
SELECT AVG (Rating.rate), Movies.id, Movies.title
FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id);

# Exercício 5

a) Pois está conectando os Movies e os Actors pela tabela MovieCast, desta maneira precisa de dois JOIN.

b)
SELECT Movies.id as movie_id, Movies.title, Actor.id as actor_id, Actor.name FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

c)
Error Code: 1054. Unknown column 'm' in 'field list', não existe a coluna m.
Aconteceu o erro pois o código estava m,title ao inves de m.title

d)
SELECT Movies.id as movie_id, Movies.title, Actor.id as actor_id, Actor.name, Rating.rate, Rating.comment 
FROM Movies
LEFT JOIN Rating on Rating.movie_id = Movies.id
LEFT JOIN MovieCast on Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

# Exercício 6

a) A relação é M:N pois o mesmo filme pode ganhar mais de 1 oscar  e vários filmes podem ganhar o mesmo tipo de oscar.

b)
CREATE TABLE Oscar (
	name VARCHAR(255) PRIMARY KEY,
    date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

c)
INSERT INTO Oscar (id, name, date, movie_id)
VALUES (
	"asd",
	"Óscar de melhor filme",
    "2019-12-05",
    "004"
),(
	"sdf",
	"Óscar de melhor direção",
    "2019-12-05",
    "004"
),(
	"dfg",
	"Óscar de melhor roteiro",
    "2004-06-25",
    "001"
),(
	"fgh",
	"Óscar de melhor direção",
    "2019-12-05",
    "001"
),(
	"ghj",
	"Óscar de melhor elenco",
    "2009-02-15",
    "002"
),(
	"hjk",
	"Óscar de melhor roteiro",
    "2009-02-15",
    "002"
),(
	"jkl",
	"Óscar de melhor trilha sonora",
    "2005-01-15",
    "003"
),(
	"zxc",
	"Óscar de melhor efeitos visuais",
    "2004-01-12",
    "003"
),(
	"xcv",
	"Óscar de melhor gravação",
    "2001-10-05",
    "005"
),(
	"cvb",
	"Óscar de melhor trilha sonora",
    "2001-10-05",
    "005"
)
;

d)
SELECT Movies.id as movie_id, Movies.title as title, Oscar.name as oscar, Oscar.date
FROM Movies
JOIN Oscar on Movies.id = Oscar.movie_id;





