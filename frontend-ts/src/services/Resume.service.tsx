import axios from "axios"

const getResume = async () => {
  const res = await axios.get(`http://localhost:3000/api/resume`)
  return res.data[0]
}
export default getResume
