import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { connect } from "http2";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getActorById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
  console.log(result[0][0]) 
  return result[0][0]
  } catch (error) {
    console.log(error)
  }
  
}

async function getActorByName (name: string): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  } catch (error) {
    console.log(error)
  }
}

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

// countActorsByGender("male")
// SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

// createActor("007", "Stenio Garcia", 300000, new Date("1927-12-02"), "male")

async function updateActorIncome (id: string, salary: number): Promise<any> {
  await connection("Actor").update({
    salary: salary
  })
  .where("id", id)
}

// updateActor("001", 450000)

async function deleteActor (id: string): Promise<void> {
  await connection("Actor").delete()
  .where("id", id)
}

// deleteActor("007")

async function averageIncomeByGender (gender: string): Promise<any> {
  const result = await connection("Actor").avg("salary as average")
  .where("gender", gender)
  console.log(result[0].average)
  return result[0].average
}

// averageIncomeByGender("male")

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const actor = await getActorById(id);

    res.status(200).send(`
      Atriz: ${actor.name}
      Gênero: ${actor.gender}
      id: ${actor.id}
      Data de Nascimento: ${actor.birth_date}
      Salário: ${actor.salary.toFixed(2)}
      `)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// getActorById("001")

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

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id)
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

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
