// const express = require('express')
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'

const app: Application = express()
// const port = 3000

// parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('this is main route')
})

const getAController = (req: Request, res: Response) => {
  const a = 10
  res.send(a)
}
app.get('/', getAController)

// console.log(process.cwd())
// // D:\level-2-projects\mongoose\first-project/.env

export default app
