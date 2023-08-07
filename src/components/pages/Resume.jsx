const frontendProficiencies = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "responsive design",
  "React",
  "Bootstrap"
]

const backendProficiencies = [
  "APIs",
  "Node.js",
  "Express.js",
  "MySQL",
  "GraphQL",
  "MongoDB",
  "REST"
]

export default function Resume() {
  return (
    <div className="resumeDiv">
      <h3>
        Resume:
      </h3>
      <br></br>
      <div>
        <p>Download my<span> </span><a href="#" download>resume</a>
        </p>
      </div>
      <br></br>
      <br></br>
      <p>Front-end Proficiencies</p>
      <ul>
        {frontendProficiencies.map((proficiency,index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
      <br></br>
      <p>Back-end Proficiencies</p>
      <ul>
        {backendProficiencies.map((proficiency,index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  )
}