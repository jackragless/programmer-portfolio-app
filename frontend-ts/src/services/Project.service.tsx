import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_API_URI;
export const getProjects = async (query:string) => {
  const res = await axios.get(`/projects/?title=${query}`)
  return res.data.projects
}
