import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

const config = new DataSource({
  type: 'postgres',
  host: process.env.DEV_DB_HOST || process.env.PROD_DB_HOST,
  port: Number(process.env.DEV_DB_PORT) || Number(process.env.PROD_DB_PORT),
  username: process.env.DEV_DB_USER || process.env.PROD_DB_USER,
  password: process.env.DEV_DB_PASSWORD || process.env.PROD_DB_PASSWORD,
  database: process.env.DEV_DB_DB || process.env.PROD_DB_DB,
  entities: ['models/*model.ts'],
  synchronize: true,
})

export default config
