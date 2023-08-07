const projects = [
  {
    projectTitle: "GigPub",
    language: "HTML/CSS/TailwindCSS/W3.CSS/JavaScript",
    imageSource: "/src/assets/images/gitpub-mock-image.png",
    deployedLink: "https://mewesley1984.github.io/GitPub/",
    githubRepo: "https://github.com/mewesley1984/GitPub.git"
  },
  {
    projectTitle: "GigPub 2.0",
    language: "HTML/CSS/TailwindCSS/W3.CSS/JavaScript/Node.js/MySQL2",
    imageSource: "/src/assets/images/GigPub2.0.png",
    deployedLink: "https://boiling-journey-48938-11ea72bc1c15.herokuapp.com/",
    githubRepo: "https://github.com/Trevor-McGuire/GigPub-2.0.git"
  },
  {
    projectTitle: "J.A.T.E",
    language: "HTML/CSS/JavaScript/Workbox/Service Workers/IndexedDB",
    imageSource: "/src/assets/images/jate.png",
    deployedLink: "https://cryptic-lake-08316-722d7609fd3f.herokuapp.com/",
    githubRepo: "https://github.com/adorahtho/text-editor.git"
  },
  {
    projectTitle: "Note Taker",
    language: "Node.js/JavaScript/Express.js/HTML/CSS",
    imageSource: "/src/assets/images/note-taker.png",
    deployedLink: "https://murmuring-basin-97362.herokuapp.com/",
    githubRepo: "https://github.com/adorahtho/note-taker.git"
  },
  {
    projectTitle: "Weather Dashboard",
    language: "HTML/CSS/JavaScript",
    imageSource: "/src/assets/images/weather-dashboard.png",
    deployedLink: "https://adorahtho.github.io/weather-dashboard/",
    githubRepo: "https://github.com/adorahtho/weather-dashboard.git"
  },
  {
    projectTitle: "Work Day Scheduler",
    language: "HTML/CSS/JavaScript/jQuery/Day.js",
    imageSource: "/src/assets/images/workday-scheduler.png",
    deployedLink: "https://adorahtho.github.io/work-day-scheduler/",
    githubRepo: "https://github.com/adorahtho/work-day-scheduler.git"
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
            <a href={project.githubRepo} className="small-fontsize">GitHub Repo</a>
          </div>
          <a href={project.deployedLink}>
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


