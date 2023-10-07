import express from "express"
import cors from "cors"
import dbapi from "./dbapi.js"

const app = express()
app.use(cors())
app.use(express.json())

///////////////////////////
app.use("/api/projects", dbapi.getProjects)
app.use("/api/resume", dbapi.getResume)
app.use("*", (req, res) => res.status(404).json({ error: "invalid_api_call" }))

export default app
