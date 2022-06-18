import "./App.css";
import NavbarPage from './components/NavbarPage'
import { MainRouter } from "./routers/MainRouter";
import Footer from './components/Footer'

function App() {
  return <div className="App">
    <NavbarPage />
    <MainRouter/>
    <Footer />
  </div>;
}

export default App;
