import app from "./server.js"
import mongodb from "mongodb"
import dbapi from "./dbapi.js"
const mc = mongodb.MongoClient
import dotenv from "dotenv"
dotenv.config({ path: "../.env" })

const db_uri = process.env.DB_URI

const port = process.env.PORT || 5000

mc.connect(db_uri).then(async (client) => {
  await dbapi.inject(client)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})
