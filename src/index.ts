import express, { Application } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import cors from 'cors'
import Router from './routes'
import dbConfig from './config/database'

export default class App {
  app: Application

  constructor(private port?: number) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    //this.app.use(express.static("public"));
  }

  private async settings() {
    dotenv.config()
    try {
      //await dbConfig.initialize()
      console.log('Database connected')

      this.app.listen(process.env.PORT || this.port, () => {
        console.log('Server is running on port:', process.env.PORT || this.port)
      })
    } catch (error) {
      console.log('Unable to connect to db', error)
    }
  }

  private routes() {
    this.app.use(`${process.env.API_VERSION}`, Router)
  }
}

new App()
