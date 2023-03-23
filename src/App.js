import Nav from    "./components/Nav"
import Intro from  "./components/Intro"
import Promo from  "./components/Promo"
import Footer from "./components/Footer"
function App() { 
  return ( 
    <div>
    <div className="main-nav"> 
      <Nav /> 
    </div> 
    <div className="info">
      <Intro />
    </div>
    <div className="promo-section">
      <Promo />
    </div>
    <div className="copyright">
      <Footer />
    </div>
    </div>
  ); 
} 
 
export default App;
