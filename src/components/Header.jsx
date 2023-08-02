import { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div>
      <header>
        <h1>Adorah Tho</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <main>
        <div className="container">
          <img src="/assets/images/main-background.png" className="main-background" alt="Orange and blue data analytics background"/>
          <img src="/assets/images/selfie.jpg" className="selfie-image" alt="Selfie"/>
          <p className="background-text">Hi, I&apos;m Adorah!</p>
        </div>
        <section>
          {renderPage()}
        </section>
      </main>
    </div>
  )
}

