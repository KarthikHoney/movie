import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faTwitter,
  faSquareInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import './index.css'

const Footer = () => (
  <div className="footerContainer">
    <div className="fontIcons">
      <FontAwesomeIcon className="googleIcon" icon={faGoogle} />
      <FontAwesomeIcon className="googleIcon" icon={faTwitter} />
      <FontAwesomeIcon className="googleIcon" icon={faSquareInstagram} />
      <FontAwesomeIcon className="googleIcon" icon={faYoutube} />
    </div>
    <div>
      <p className="footerPara">Contact Us</p>
    </div>
  </div>
)

export default Footer
