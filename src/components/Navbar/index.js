import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const renderDarkTheme = () => (
        <div className="navbar-con-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="web-logo"
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button type="button" onClick={toggleTheme} data-testid="theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="theme"
            />
          </button>
        </div>
      )

      const renderLightTheme = () => (
        <div className="navbar-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="web-logo"
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button type="button" onClick={toggleTheme} data-testid="theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="theme"
            />
          </button>
        </div>
      )

      return isDarkTheme ? renderLightTheme() : renderDarkTheme()
    }}
  </ThemeContext.Consumer>
)

export default Navbar
