import axios from "axios"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import dotenv from "dotenv"
dotenv.config({ path: path.join(__dirname, "../.env") })
const api_uri = env.API_URI

const getProjects = async (query = "") => {
  const res = await axios.get(`${api_uri}/projects/?title=${query}`)
  if (query === "") {
    return res.data.projects.sort((a, b) => {
      var textA = a.created_at
      var textB = b.created_at
      return textA < textB ? 1 : textA > textB ? -1 : 0
    })
  } else {
    return res.data.projects[0]
  }
}

export default getProjects
