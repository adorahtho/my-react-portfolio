const projects = [
  {
    projectTitle: "GigPub",
    language: "HTML/CSS/TailwindCSS/W3.CSS/JavaScript",
    imageSource: "/src/assets/images/gitpub-mock-image.png",
    projectLink: "https://mewesley1984.github.io/GitPub/"
  },
  {
    projectTitle: "GigPub 2.0",
    language: "HTML/CSS/TailwindCSS/W3.CSS/JavaScript/Node.js/MySQL2",
    imageSource: "/src/assets/images/GigPub2.0.png",
    projectLink: "https://boiling-journey-48938-11ea72bc1c15.herokuapp.com/"
  },
  {
    projectTitle: "Pastel Puzzles",
    language: "MERN Stack",
    imageSource: "/src/assets/images/pastel-puzzles.png",
    projectLink: "#"
  },
  {
    projectTitle: "Calculator",
    language: "React/JavaScript/CSS",
    imageSource: "/src/assets/images/calculator.png",
    projectLink: "#"
  },
  {
    projectTitle: "Run Buddy",
    language: "HTML/CSS",
    imageSource: "/src/assets/images/run-buddy.png",
    projectLink: "#"
  }
]

export default function Project() {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div key={index}>
          <div className="project-textbox">
            <h4>{project.projectTitle}</h4>
            <p className="small-fontsize">
              {project.language}
            </p>
          </div>
          <a href={project.projectLink}>
            <img
              src={project.imageSource}
              alt="Coding Projects"
              className="project-img"
            />
          </a>
        </div>
      ))}
    </div>
  )
}


