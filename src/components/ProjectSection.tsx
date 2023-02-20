import React from "react"
import { ProjectList } from "./ProjectList"
import { db } from "../../firebase"
import SearchBar from "./SearchBar"

const ProjectSection = () => {
  return (
    <section>
      <div>
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          Projects
        </h1>
        <button>new</button>
      </div>
      <SearchBar></SearchBar>
      <ProjectList></ProjectList>
    </section>
  )
}

export default ProjectSection
