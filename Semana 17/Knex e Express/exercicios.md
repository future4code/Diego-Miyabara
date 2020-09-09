# Exercício 1 

a) A resposta em Raw vem exatamente a resposta do MySQL ou seja, com o resultado da tabela (RowDataPacket) e mais alguns resultados referente a table criada que vem com nome FiledPacket.

b) 
async function getActorByName (name: string): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  } catch (error) {
    console.log(error)
  }
}

c)
async function countActorsByGender (gender: string): Promise<any> {
  const result = await connection.raw(`
  SELECT COUNT(*) as count
  FROM Actor
  WHERE gender = '${gender}';
  `)

  const count = result[0][0].count
  console.log(count)
  return count
}

# Exercício 2

a) 
async function updateActor (id: string, salary: number): Promise<any> {
  await connection("Actor").update({
    salary: salary
  })
  .where("id", id)
}

b)
async function deleteActor (id: string): Promise<void> {
  await connection("Actor").delete()
  .where("id", id)
}

c)
async function averageIncomeByGender (gender: string): Promise<any> {
  const result = await connection("Actor").avg("salary as average")
  .where("gender", gender)
  console.log(result[0].average)
  return result[0].average
}

# Exercício 3

a) Pois no caminho informado o id é recebido como path params, aí para ser acessado você usa o req de request o params e o id que foi informado com :id.

b) Envia uma resposta dentro do send caso o status seja 200 ou 400.

c)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender as string;
    const count = await countActorsByGender(gender)

    res.status(200).send({
      Quantidade: count
    })
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

# Exercício 4

a)
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateActorIncome(req.body.id, req.body.salary)
    res.status(200).send({
      message: "Sucess"
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id)
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

# Exercício 5

async function createMovie(id: string, title: string, synopsis: string, release_date: Date, rating: number): Promise<void> {
  try {
    await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      release_date: release_date,
      rating: rating,
    })
    .into("Movies");
  } catch (error) {
    console.log(error.message)
  }
}

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      new Date(req.body.release_date),
      req.body.rating)

      res.status(200).send("Filme cadastrado com sucesso")
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

# Exercício 6

const getAllMovies = async() : Promise<any> => {
  const response = await connection.raw(`
    SELECT * FROM Movies LIMIT 15;
  `)

  return response[0]
}

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies()

    res.status(200).send({movies: movies})
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

# Exercício 7

const searchMovie = async(title?:string, synopsis?: string): Promise<any> => {
  const response = await connection
  .select("*")
  .orderBy("release_date", "desc")
  .where('title', 'LIKE', `%${title}%`)
  .orWhere('synopsis', 'LIKE', `%${synopsis}%`)
  .into("Movies")
  console.log(response)
  return response
}

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.filter as string)

    res.status(200).send({movies: movies})
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})


