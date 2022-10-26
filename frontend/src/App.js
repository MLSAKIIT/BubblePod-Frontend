import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import NavBar from "./components/Nav-Bar";
import Interest from "./components/Interest/Interest";
import Matching from "./components/MatchingSection/matching";
import Login from "./components/Login";
import Selection from "./components/SelectionComplete/selection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfileBuilder";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path='/' element={<HeroSection/>}></Route>
        <Route path='/' element={<Footer/>}></Route>
        <Route path='/profile' element={<Profile/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/interest' element={<Interest/>} ></Route>
        <Route path='/Selection' element={<Selection/>} ></Route>
        <Route path='/Matching' element={<Matching/>} ></Route>
        </Routes>
      </Router>
</>
  )
}

export default App;

