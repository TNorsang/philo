import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

const connectionString = process.env.POSTGRES_URL

const db = new Kysely({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: connectionString,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    }),
  }),
})

export default db
