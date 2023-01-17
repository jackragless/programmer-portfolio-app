import axios from "axios"

const api_uri = "https://leetcode-stats-api.herokuapp.com/jackragless"

const getLeetStats = async () => {
  const res = await axios.get(api_uri)
  return res.data
}

export default getLeetStats
