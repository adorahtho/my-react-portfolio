import githubLogo from '/assets/github.svg'
import linkedInLogo from '/assets/linkedin.svg'
import stackOverFlowLogo from '/assets/stack-overflow.svg'
import twitterLogo from '/assets/twitter.svg'

export default function Footer() {
  return (
    <footer>
      <div className='logoDiv'>
        <a href="https://github.com/adorahtho">
          <img src={githubLogo} className="logo" alt="GitHub Logo"/>
        </a>
        <a href="https://www.linkedin.com/in/adorah-tho-91a4b3237/">
          <img src={linkedInLogo} className="logo" alt="LinkedIn Logo"/>
        </a>
        <a href="https://stackoverflow.com/users/20427010/adorah-tho">
          <img src={stackOverFlowLogo} className="logo" alt="Stack Overflow Logo"/>
        </a>
        <a href="https://twitter.com/ThoAdorah">
          <img src={twitterLogo} className="logo" alt="Twitter Logo"/>
        </a>
      </div>
    </footer>
  )
}
