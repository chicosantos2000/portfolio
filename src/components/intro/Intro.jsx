import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i"> 
        
        <div className="i-left">
           <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Francisco Santos</h1>
              <div className="i-title"> 
                <div className="i-title-wrapper">
                  <div className="i-title-item">Self Taught Developer</div>
                  <div className="i-title-item">Tech Enthusiast</div>
                  <div className="i-title-item">Petrolhead</div>
                  <div className="i-title-item">PC Gamer</div>
                  <div className="i-title-item">Trip Lover</div>
                </div>
              </div>
              <p className="i-desc"> 
              Im Francisco Santos, im 21 years old and im a self-taught developer. 
              </p>
          </div>
          </div>
          <div className="i-right">
            <div className="i-bg"> </div>
            <img src={Me} alt="" className="i-img" />
          </div>
            </div>
          )
        }

export default Intro