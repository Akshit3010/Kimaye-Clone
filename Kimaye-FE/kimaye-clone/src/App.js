import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Grow/BlogDetails';
import Grow from './Grow/Grow';
import Home from './Home/Home';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='grow' element={<Grow />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
