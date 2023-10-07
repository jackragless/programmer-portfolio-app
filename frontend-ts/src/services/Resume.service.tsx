import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_API_URI;
export const getResume = async () => {
  const res = await axios.get("/resume")
  return res.data[0]
}
