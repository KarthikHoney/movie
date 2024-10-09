import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Header1 = () => (
  <div className="container">
    <div className="head2">
      <div id="imgAndNav">
        <img
          src="https://res.cloudinary.com/dceanjhp6/image/upload/v1716358998/im7fouox4t2rpwopswma.png"
          alt="website logo"
          className=""
        />
        <p className="Header1homePara">Home</p>
        <p className="Header1homePara">popular</p>
      </div>
      <div id="searchAndProfile">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sicon" />
        <img
          src="https://res.cloudinary.com/dceanjhp6/image/upload/v1722350193/pexels-anup-panthi-3474897-5356738_bg6rge.jpg"
          alt="Profile"
          className="profileIcon"
        />
      </div>
    </div>
  </div>
)

export default Header1
