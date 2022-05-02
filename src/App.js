import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import Header from './components/Header';
import Footer from './components/Footer';
/* Post Components*/
import PostDetails from "./components/Posts/PostDetails";
import NewPost from "./components/Posts/NewPost";
import SearchPosts from "./components/Posts/SearchPosts";
/* Auth Components */
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
/* User Componentes */
import Register from "./components/User/Register";
/* Styling */
/* Import Bootswatch */
import './bootstrap.css'
/* Pages */
import HomePage from './pages/HomePage';
import NotFound from "./pages/NotFound";
import InternalServerError from "./pages/InternalServerError";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          {/* Pages */}
          <Route path="/" exact element={ <HomePage/> }/>
          {/* Custom Pages */}
          <Route path="/not-found" exact element={ <NotFound/> }/>
          <Route path="/server-error" exact element={ <InternalServerError/> }/>
          {/* Auth Pages */}
          {/* Post Related Components */}
          <Route path="/new-post" element={<NewPost/>}/>
          <Route path="/posts/:id" element={ <PostDetails/> }/>
          <Route path="/search" element={<SearchPosts/>}></Route>
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
