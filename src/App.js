import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetails from "./components/Posts/PostDetails";
/* Auth Components */
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
/* User Componentes */
import Register from "./components/User/Register";
/* Pages */
import { HomePage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          {/* Pages */}
          <Route path="/" exact element={ <HomePage/> }/>
          {/* Post Related Components */}
          <Route path="/posts/:id" element={ <PostDetails/> }/>
          {/* Authentication Related Components */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          {/* User Related Components */}
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
