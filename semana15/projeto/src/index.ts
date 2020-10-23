import express,{ Express, Request, response } from 'express';
import cors from 'cors';
import { accounts } from "./accounts";

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response)=>{
    try{
        const { name, CPF, dateOfbirth } = req.body
        
        accounts.push({
            name,
            CPF,
            dateOfbirth,
            balance: 0,
            statement: []
        })

    }catch(error){

    }
})

app.listen(3003,()=>{
    console.log("test ok")
});