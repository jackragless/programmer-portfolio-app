import axios from "axios"

// type Project = Record<string,any>

const getProjects = async (query:string) => {
  const res = await axios.get(`https://programmer-portfolio-app.vercel/api/projects/?title=${query}`)
  return res.data.projects
}

export default getProjects
