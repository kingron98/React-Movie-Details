import logo from './logo.svg';
import './App.css';
import moviesData from './moviesData';
import Movies from './Movies';
import Header from './components/Header'
import {Link } from "react-router-dom"

const moviesComponent = moviesData.map(item => <Movies key={item.imdbID} movies={item}/> )

function App() {
  return (
    <div className="App">
      <Header />
      {moviesComponent}
    </div>
  );
}

export default App;
