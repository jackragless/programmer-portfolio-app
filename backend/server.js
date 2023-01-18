import express from "express"
import cors from "cors"
import dbapi from "./dbapi.js"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())
// production build code
app.use(express.static(path.join(__dirname, "../frontend/build/")))

///////////////////////////
app.use("/api/projects", dbapi.getProjects)
app.use("/api/resume", dbapi.getResume)
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
})
// app.use("*", (req, res) => res.status(404).json({ error: "invalid_api_call" }))

export default app
