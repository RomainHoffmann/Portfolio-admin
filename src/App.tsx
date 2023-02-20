import { useState } from "react"
import ProjectSection from "./components/ProjectSection"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectSection></ProjectSection>
    </>
  )
}

export default App
