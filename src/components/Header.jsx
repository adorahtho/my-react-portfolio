import Navigation from './Navigation';


function Header() {
  return(
    <div>
      <header>
        <h1>Adorah Tho</h1>
        <Navigation />
      </header>
      <main>
        <div className="container">
        <img src="/assets/images/main-background.png" className="main-background" alt="Orange and blue data analytics background"/>
        <img src="/assets/images/selfie.jpg" className="selfie-image" alt="Selfie"/>
        <p className="background-text">Hi, I&apos;m Adorah!</p>
      </div>
      </main>
    </div>
  )
}

export default Header;

// header has the navigation inside of it. bring in navigation in here.