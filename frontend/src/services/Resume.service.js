import axios from "axios"
// import dotenv from "dotenv"
// dotenv.config({ path: "../../../.env" })
// const api_uri = process.env.API_URI
const api_uri = "http://localhost:5000/api"

const getResume = async () => {
  const res = await axios.get(`${api_uri}/resume`)
  return res.data[0]
}
export default getResume
