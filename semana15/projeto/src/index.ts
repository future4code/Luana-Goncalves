import express,{ Express, Request, response } from 'express';
import cors from 'cors';
import { accounts } from "./accounts";

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response)=>{
    try{
        const { name, CPF, dateOfbirthAssString } = req.body
        
        const [day, month, year] = dateOfbirthAssString.split("/")

        const dateOfbirth: Date = new Date('${year}-${month}-${day}')

        const ageInMilisseconds:number = Date.now() - dateOfbirth.getTime()

        const ageInYears: number = ageInMilisseconds /1000 / 60 / 60 / 24 / 365
        if (ageInYears < 18 ){
            res.statusCode = 406
            throw new Error("Error age")
        }
        
        accounts.push({
            name,
            CPF,
            dateOfbirth,
            balance: 0,
            statement: []
        })

        res.status(201).send("Account successfully created!")

    }catch(error){
        console.log(error)
        res.send(error.message)

    }
})

app.get("/users/all", (req: Request, res: Response)=>{
    try{
        if(!accounts.length){
            response.statusCode = 404
            throw new Error("No accounts")
        }

        res.status(200).send(accounts)

    } catch (error){
        console.log(error)
        res.status(400).send(error.message)
    }

})

app.listen(3003,()=>{
    console.log("test ok")
});