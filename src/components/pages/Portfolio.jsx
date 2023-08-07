export default function Portfolio() {
  return (
    <div>
      <h3>
        Portfolio Page:
      </h3>
      <section className="work-images">
          <div className="project-container">
            <a href="https://mewesley1984.github.io/GitPub/ ">
              <img src="/assets/images/gitpub-mock-image.png" alt="GigPub Project" className="project-img"/>
              <div className="project-textbox gigpub-textspacing">
                <h4>GigPub</h4>
                <p className="small-fontsize">HTML/CSS/TailwindCSS/W3.CSS/JavaScript</p>
              </div> 
            </a>  
          </div>
          <div className="project-container">
            <a href="https://boiling-journey-48938-11ea72bc1c15.herokuapp.com/">
              <img src="/assets/images/GigPub2.0.png" alt="GigPub2.0 Project" className="project-img"/>
              <div className="project-textbox gigpub-textspacing">
                <h4>GigPub 2.0</h4>
                <p className="small-fontsize">HTML/CSS/TailwindCSS/W3.CSS/JavaScript/Node.js/MySQL2</p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a href="#">
              <img src="/assets/images/pastel-puzzles.png" alt="pastel puzzles" className="project-img"/>
              <div className="project-textbox puzzle-calc-textspacing">
                <h4>Pastel Puzzles</h4>
                <p className="small-fontsize">MERN Stack</p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a href="#">
              <img src="/assets/images/calculator.png" alt="calculator" className="project-img"/>
              <div className="project-textbox puzzle-calc-textspacing">
                <h4>Calculator</h4>
                <p className="small-fontsize">React/JavaScript/CSS</p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a href="#">
              <img src="/assets/images/run-buddy.png" alt="run buddy" className="project-img"/>
              <div className="project-textbox runbuddy-textspacing">
                <h4>Run Buddy</h4>
                <p className="small-fontsize">HTML/CSS</p>
              </div>
            </a>
          </div>
        </section>
    </div>
  )
}

// inside the portfolio are the projects. use this file to form the layout for the page and then use Project.jsx to create the images for each project.