import app from "./server.js"
import mongodb from "mongodb"
import dbapi from "./dbapi.js"
const mc = mongodb.MongoClient
import dotenv from "dotenv"
dotenv.config()

// const db_uri = process.env.DB_URI
const db_uri =
  "mongodb+srv://jackragless:mernstack@cluster0.she2tlp.mongodb.net/?retryWrites=true&w=majority"

// const port = process.env.PORT
const port = 3000

mc.connect(db_uri).then(async (client) => {
  await dbapi.inject(client)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})
