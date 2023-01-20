import axios from "axios"

const getProjects = async (query = "") => {
  // const res = await axios.get(`${api_uri}/projects/?title=${query}`)
  const res = await axios.get(`/api/projects/?title=${query}`)
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
