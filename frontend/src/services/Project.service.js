import axios from "axios"
// import dotenv from "dotenv"
// dotenv.config({ path: "../../.env" })
// const api_uri = process.env.API_URI
const api_uri = "http://localhost:5000/api"

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
