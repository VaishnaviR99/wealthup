import mob from "./media/mob.png"
import vector from "./media/Vector.png"
import reg from "./media/reg.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Check your financial health</h1>
        <p className="subheader">
          Use WeathoMeter to get a free report <br /> card for your finances-
          within minutes!
        </p>
        <button className="getstarted">Get Started</button>
      </div>

      <div className="middlecon">
        <div style={{ marginTop: "55px" }}>
          <div className="tickcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              style={{ fill: "#FFFFFF" }}
            >
              <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
            </svg>
            <p>Expected Retirement Age</p>
          </div>
          <div className="tickcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              style={{ fill: "#FFFFFF" }}
            >
              <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
            </svg>
            <p>Identify Mistakes</p>
          </div>
        </div>
        <div className="mob">
          <img src={mob} alt="mobile" width="500px" height="500px" />
        </div>
        <div style={{ marginTop: "55px" }}>
          <div className="tickcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              style={{ fill: "#FFFFFF" }}
            >
              <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
            </svg>
            <p>Personalised Road Map</p>
          </div>
          <div className="tickcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              style={{ fill: "#FFFFFF" }}
            >
              <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
            </svg>
            <p>Tips To Improve</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="vector">
          <img src={vector} alt="vector" />
        </div>

        <div className="content">
          <h1 style={{marginTop:"-300px"}}>How it works?</h1>
          <div className="content2">
            <div className="registeration">
              <img src={reg} alt="registeration" width="700px" height="500px" />
            </div>

            <div className="note">
              <p>
                Answer few
                <br /> questions
              </p>
              <p>
                Register using <br />
                phone and OTP
              </p>
              <p>
                Get report and <br />
                personal roadmap
              </p>
            </div>
          </div>
          <button className="getstartedd">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
