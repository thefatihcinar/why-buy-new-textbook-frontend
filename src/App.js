import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PostDetails  } from "./components/Posts";
/* Pages */
import { HomePage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={ <HomePage/> }/>
          <Route path="/posts/:id" element={ <PostDetails/> }/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
