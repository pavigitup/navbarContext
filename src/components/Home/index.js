import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div>
          <Navbar />
          <div className="home-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              className="home-logo"
              alt="home"
            />
            <h1 className="h1">Home</h1>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="home-con-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              className="home-logo"
              alt="home"
            />
            <h1 className="h1 head">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
