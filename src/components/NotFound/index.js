import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => {
  const renderDark = () => (
    <div>
      <Navbar />
      <div className="home-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          className="not-found-img"
          alt="not found"
        />
        <h1>Lost Your Way?</h1>
        <p>We cannot seem to find the page you are looking for.</p>
      </div>
    </div>
  )
  const renderLight = () => (
    <div>
      <Navbar />
      <div className="home-con-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          className="not-found-img"
          alt="not found"
        />
        <h1>Lost Your Way?</h1>
        <p>We cannot seem to find the page you are looking for.</p>
      </div>
    </div>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? renderDark() : renderLight()
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
