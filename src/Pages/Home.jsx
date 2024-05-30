import '../assets/css/App.css';
import Footer from '../Components/Layout/Footer/Footer.jsx';
import Header from '../Components/Layout/Header/Header.jsx';
import Body from '../Components/Layout/Body/Body.jsx';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="App">
      <Header /> 
      
      <Body />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
