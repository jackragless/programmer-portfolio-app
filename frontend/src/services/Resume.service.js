import axios from "axios"
import config from "../config.json"
const api_uri = config.api_uri

const getResume = async () => {
  const res = await axios.get(`${api_uri}/resume`)
  return res.data[0]
}
export default getResume
