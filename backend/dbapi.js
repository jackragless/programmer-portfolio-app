let projects
let resume

export default class dbapi {
  static async inject(conn) {
    try {
      projects = await conn.db("jack-portfolio-website").collection("projects")
    } catch (e) {
      console.error(
        `Unable to establish a collection with projects table: ${e}`
      )
    }

    try {
      resume = await conn.db("jack-portfolio-website").collection("resume")
    } catch (e) {
      console.error(`Unable to establish a collection with resume table: ${e}`)
    }
  }

  static async getProjects(req, res, next) {
    let query = {}
    const project_name = req.query.title
    if (project_name) {
      query = { name: { $eq: project_name } }
    }
    const project_list = await projects.find(query).toArray()

    return res.json({ projects: project_list })
  }

  static async getResume(req, res, next) {
    const resume_obj = await resume.find({}).toArray()
    return res.json(resume_obj)
  }
}
