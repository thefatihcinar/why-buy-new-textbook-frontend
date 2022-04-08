import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2 development
        </a>
        <Post/>
        <Button variant="contained">Hello World</Button>
        <Alert severity="error">This is an error message</Alert>
      </header>
    </div>
  );
}

export default App;
