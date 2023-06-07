import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersService from './app/modules/user/users.service'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '2222',
    role: 'student',
    password: '45645+6',
  })
  res.send('Working nicely')
})

export default app
