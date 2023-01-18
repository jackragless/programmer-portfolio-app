import axios from "axios"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import dotenv from "dotenv"
dotenv.config({ path: path.join(__dirname, "../.env") })
const api_uri = env.API_URI

const getResume = async () => {
  const res = await axios.get(`${api_uri}/resume`)
  return res.data[0]
}
export default getResume
