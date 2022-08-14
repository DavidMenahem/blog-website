import './Header.css'
import logoImage from '.././../../Assests/images/logo.png'
import mainImage from '../../../Assests/images/mainImage.png'
import { NavLink } from 'react-router-dom'
function Header(): JSX.Element {
  return (
    <div className="Header">
      <img className="logo" src={logoImage} alt=""></img>
      <NavLink className="homeLink" to="/home">
        ראשי
      </NavLink>
      <NavLink className="aboutLink" to="/about">
        אודות
      </NavLink>
      <div className="lifeLink">
        <NavLink className="lifeNav" to="/home">
          לייף סטייל
        </NavLink>
        <div className="dropdown">
          <NavLink className="fashionLink" to="/posts/fashion">
            אופנה
          </NavLink>
          <NavLink className="beautyLink" to="/posts/beauty">
            ביוטי
          </NavLink>
          <NavLink className="foodLink" to="/posts/food">
            אוכל
          </NavLink>
          <NavLink className="inspireLink" to="/posts/inspiration">
            השראה
          </NavLink>
        </div>
      </div>

      <div className="mainImage">
        <img src={mainImage} width="100%" height="600px" alt=""></img>
      </div>
      <div className="sloganContainer">
        <div className="slogan">
          <div className="sloganGap"></div> LIVE LIKE NO ONE IS WATCHING
        </div>
      </div>
    </div>
  )
}

export default Header
