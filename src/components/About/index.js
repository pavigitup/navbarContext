import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div>
          <Navbar />
          <div className="home-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              className="home-logo"
              alt="about"
            />
            <h1 className="h1">About</h1>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="home-con-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              className="home-logo"
              alt="about"
            />
            <h1 className="h1 head">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
