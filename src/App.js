import Nav from    "./components/Nav"
import Intro from  "./components/Intro"
import Promo from  "./components/Promo"
import Footer from "./components/Footer"
function App() { 
  return ( 
    //  <> fragment to wrap all components without leaving any trace in the browser HTML tree.
    <> 
    <div className="main-nav"> 
      <Nav  /> 
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
    </>
  ); 
} 
 
export default App;
