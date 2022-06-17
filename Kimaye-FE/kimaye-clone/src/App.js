import Cart from "./components/Cart";
// import OurStory from "./Learn/OurStory";
import "./App.css";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/Footer";
// import { OurStory } from './pages/OurStory';
// import { Whykimaye } from './pages/Whykimaye';
import ControlledCarousel from "./components/ControlledCarousel";
import MainHome from "./pages/MainHome";

function App() {
  return (
    <div>
      <header className="App-header">
        <NavbarPage />
        <ControlledCarousel />
        <MainHome />

        <Footer />
      </header>
    </div>
  );
}

export default App;
