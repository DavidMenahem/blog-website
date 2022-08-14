import './About.css'
import aboutImage from '../../../Assests/images/about/about.jpg'
function About(): JSX.Element {
  return (
    <div className="About Box">
      <div className="aboutTitle">About Me</div>
      <img src={aboutImage} alt="" width="100%"></img>
      <div>
        היי אני יעל מאיה בת 35, נשואה לדייב + פרינס ובנג'י חתולים שלנו.מתמודדת
        עם פוסט טראומה דרך אהבה ענקית לאופנה ולייפסטייל.ממכורה לשופינג קשות,
        למדתי לצרוך נכון, מדוייק וחכם.זו הפינה שלי לחלוק איתכן את הטיפים
        וההמלצות שלי, ולהיות חלק מהחוויה שלי.,חיבוקים ונשיקותיעל מאיה מנח
      </div>
    </div>
  )
}

export default About
