import './App.css';
import iconImage from './Images/chadbot.jpg';
import ChadBot from './Chatbot/ChadBot'

import Footer from './Footer/Footer.js';
import TermsFooter from './Footer/TermsFooter.js';



function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />

      <ChadBot icon={iconImage} />


      <header className="App-header">
        LEVEL UP
      </header>


      <div className="info-header">
        <span>Feeling</span> <span>overwhelmed</span> <span>about</span> <span>your</span> <span>glowup</span> <span>✨?</span>
        <br/>
        <br />
        <span>Here</span> <span>is</span> <span>your</span> <span className="blue-text">one stop destination</span> <br />
        <span>for</span> <span>your</span> <span>looksmaxing</span>
      </div>

      <div className="infor">
        <span>We can help you be the best version of yourself youve ever been</span>
      </div>

      {/*<div className="info-list">
        ⏬ Scroll down for more ⏬
  </div>*/}

      <div className="page-1">
        <div className="text-panel">
          <div className="link-container">
            <a href="https://www.google.com/" target='blank' className="page-link">Skin & Hair <br />🧴 💈</a>
            <a href="https://www.google.com/" target='blank' className="page-link">Fashion <br />👔</a>
            <a href="https://www.google.com/" target='blank' className="page-link">Fitness & Nutrition <br />🏋️ 🥗</a>
            <a href="https://www.google.com/" target='blank' className="page-link">Mental Wellness <br />🧘‍♂️</a>
          </div>
        </div>
      </div>

      <div className='footer'>
        <TermsFooter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
