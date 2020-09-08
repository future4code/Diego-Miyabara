# Exercício 1

### Respostas:
a) O PRIMARY KEY define a primeira coluna da tabela, NOT NULL impossibilita o valor ser nulo, DATE é para datas no formato YYYY-MM-DD e o VARCHAR define strings e o valor entre () é o valor máximo de caracteres aceito.

b) O SHOW DATABASES informou quais databases eu possuo, no meu caso apareceu a turing-diego-miyabara e information_schema.
O SHOW TABLES informou todas as tabelas que possuo na database, no caso professores_labenu e Actor.

c) O comando SHOW Actor não é possível por retorna um erro de que Actor não é válido nesta posição ele espera o autor, binário, binlog, charset, char, etc...

# Exercício 2

### Respostas:

a)  
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
	    "002",
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );
    
b) Código do erro 1062. Entrada 002 duplicada para a chave primária.

c) Código do erro 1136. A contagem das colunas não correspondem aos valores na linha 1. O erro aconteceu por causa que não foram inseridos todos as colunas na primeira linha, no caso ficou faltando a data de nascimento e o gênero.
- Corrigindo o código ficaria assim:

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "003", 
      "Fernanda Montenegro",
      300000,
      "1929-10-19", 
      "female"
    );
    
d) Código do erro: 1364 campo 'name' não possui um valor padrão. Como o campo nome não foi passado e não possui um valor padrão também o mesmo retornou um erro.
- Corrigindo o código ficaria assim:

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "004",
      "Antônio Fagundes",
      400000,
      "1949-04-18", 
      "male"
    );

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1. A data não foi informada entre "", desta maneira eu acredito que foi arredondado para cima o valor.

- Corrigindo o código ficaria assim:

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "005", 
      "Juliana Paes",
      719333.33,
      "1979-03-26", 
      "female"
    );
    
f) 
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES (
        "006",
        "José Mayer",
        525799.99,
        "1949-10-03",
        "male"
        );
        
# Exercício 3

### Respostas:

a) SELECT * from Actor WHERE gender = "female";

b) SELECT salary from Actor WHERE name = "Tony Ramos";

c) SELECT * from Actor WHERE gender = "invalid";
Não foi retornado nada pois nenhum gênero tem como valor invalid, também não é possível inserir um gênero inválido pois seu VARCHAR limita em 6 caracteres.

d) SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'.
Código correto: SELECT id, name from Actor WHERE id = "002";

# Exercício 4

### Respostas:

a) Ele está selecionando todas as colunas da tabela Actor onde o name se inicia com a letra A ou J e mais a condição de que o salário seja superior a 300.000

b) SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * from Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

d) SELECT * from Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000;  

# Exercício 5

### Respostas:

a) CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY UNIQUE,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
	rating INT NOT NULL
);

b) INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

c) INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

d) INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

e) INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES (
	"004",
    "Cidade de Deus",
    "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
    "2002-08-30",
    9
);

# Exercício 6

### Respostas:

a) UPDATE Actor
SET name = "Arlette Pinheiro Monteiro Torres", birth_date = "1929-10-16"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c) UPDATE Actor 
SET name = "Cauã Reymond", salary = 550000, birth_date = "1980-05-20", gender = "male"
WHERE id = "005";

d) Erro 1054 coluna desconhecida 'movies' no lista de colunas.
UPDATE Actor
SET movies = "Cidade de Deus"
WHERE id = "006";

# Exercício 7

### Respostas:

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE
	gender = "male" AND salary > 1000000;

# Exercício 8

### Respostas:

a) Foi feito uma contagem por gênero da table Actor e foi agrupado por todos gêneros na resposta.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary ASC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

