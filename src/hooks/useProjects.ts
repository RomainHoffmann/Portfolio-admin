import React from "react"
import { projectsCol } from "../../firebase"
import { fetchAllItems } from "../api/fetchAllItems"
import { Project } from "../types"

const useProjects = () => {
  const [projects, setProjects] = React.useState<Record<string, Project>>({})

  React.useEffect(() => {
    ;(async () => {
      const projects = await fetchAllItems<Project>(projectsCol)
      setProjects(projects)
    })()
  }, [])

  return { projects }
}

export default useProjects
