export default function Portfolio() {
  return (
    <div>
      <h3>
        Portfolio Page:
      </h3>
      <section class="work-images">
          <div class="surf-image">
            <a href="https://mewesley1984.github.io/GitPub/ ">
              <img src="../../../public/assets/images/gitpub-mock-image.png" alt="surf report" class="card" id="card-surf"/>
              <div id="surf-text">
                <h4>GigPub</h4>
                <p class="small-fontsize">HTML/CSS/TailwindCSS/W3.CSS/JavaScript</p>
              </div> 
            </a>  
          </div>
          <div class="left-images">
            <a href="https://boiling-journey-48938-11ea72bc1c15.herokuapp.com/">
              <img src="../../../public/assets/images/GigPub2.0.png" alt="LED wall" class="card" id="left-cards"/>
              <div id="led-text">
                <h4>GigPub 2.0</h4>
                <p class="small-fontsize">HTML/CSS/TailwindCSS/W3.CSS/JavaScript/Node.js/MySQL2</p>
              </div>
            </a>
            <a href="#">
              <img src="./assets/Images/pastel-puzzles.png" alt="pastel puzzles" class="card"/>
              <div id="puzzles-text">
                <h4>Pastel Puzzles</h4>
                <p class="small-fontsize">MERN Stack</p>
              </div>
            </a>
          </div>
          <div class="right-images">
            <a href="#">
              <img src="./assets/Images/calculator.png" alt="calculator" class="card" id="right-cards"/>
              <div id="calculator-text">
                <h4>Calculator</h4>
                <p class="small-fontsize">React/JavaScript/CSS</p>
              </div>
            </a>
            <a href="#">
              <img src="./assets/Images/run-buddy.png" alt="run buddy" class="card"/>
              <div id="run-text">
                <h4>Run Buddy</h4>
                <p class="small-fontsize">HTML/CSS</p>
              </div>
            </a>
          </div>
        </section>
    </div>
  )
}

// inside the portfolio are the projects. use this file to form the layout for the page and then use Project.jsx to create the images for each project.