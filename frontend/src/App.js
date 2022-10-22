import NavBar from "./components/Nav-Bar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login"
import Selection from "./components/SelectionComplete/selection";
/*import {BrowserRouter as Router , Routes , Route} from react-DOM*/

/*<Router>
<Routes>
<Route path='/' path={<NavBar></NavBar>}/>
<Route path='/' path={<Footer></Footer>}/>
<Route path='/login' path={<Login></Login>}></Route>
</Routes>
</Router>*/
function App(){
  return (
    <>
  <Login></Login>
    {/* <HeroSection/> css needs to be fixed 1st priority */}
function App() {
  return (
    <>
      <NavBar />
      <Selection />
      <Footer />

      {/* <Selection/> is in progress */}

      {/* <HeroSection/> css needs to be fixed 1st priority */}
    </>
  );
}

export default App;

//4D555D footer background
