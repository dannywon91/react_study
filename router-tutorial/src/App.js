import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Profiles from './components/Profiles';




function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profile/velopert">velopert 프로필</Link></li>
        <li><Link to="/profile/gildong">gildong 프로필</Link></li>
      </ul>
      
      

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profiles />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
