import { Request, Response } from "express";
import { connection } from "../index";

//Seleciona todos os atores 
export const getActorsAll = async (req:Request, res:Response): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}


//Seleciona o ator pelo id

export const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

//Seleciona o ator pelo nome

export const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

// Seleciona o ator pele genero 
export const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};

