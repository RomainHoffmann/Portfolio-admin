import { Project } from "../types"
import useProjects from "../hooks/useProjects"
import useFilter from "../stores/useFilter"

export const ProjectList = () => {
  const { projects } = useProjects()
  const searchTerms = useFilter((state) => state.searchTerms)
  return (
    <ul>
      {Object.entries(projects).map(
        ([id, project]) =>
          project.name.toLowerCase().includes(searchTerms.toLowerCase()) && (
            <ProjectCard key={id} project={project} id={id} />
          )
      )}
    </ul>
  )
}

const ProjectCard = ({ id, project }: { id: string; project: Project }) => {
  return (
    <li
      style={{
        border: "1px solid lightgrey",
        margin: "1rem",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        height: "10rem",
        borderRadius: "0.5rem",
        width: "20rem",
      }}
    >
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>{id}</p>
    </li>
  )
}
