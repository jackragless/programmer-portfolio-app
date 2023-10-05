import axios from "axios"

const getResume = async () => {
  const res = await axios.get(`https://programmer-portfolio-app.vercel/api/resume`)
  return res.data[0]
}
export default getResume
