import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import SearchResults from './SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src={`${process.env.PUBLIC_URL}/youtube-logo.png`} alt="YouTube Logo" className="logo" />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <div className="header-right">
          <img src={`${process.env.PUBLIC_URL}/user-icon.png`} alt="User Icon" className="user-icon" />
        </div>
      </header>
      <nav className="App-nav">
        <button>Home</button>
        <button>Shorts</button>
        <button>Subscriptions</button>
        <button>Library</button>
      </nav>
      <main className="App-main">
        <div className="video-card">
          <img src={`${process.env.PUBLIC_URL}/video-thumbnail1.jpg`} alt="Video Thumbnail" className="thumbnail" />
          <div className="video-info">
            <h3>Write Winning Words and Generate Fresh Ideas With Grammarly.</h3>
            <p>Sponsored · Grammarly</p>
          </div>
        </div>
        <div className="video-card">
          <img src={`${process.env.PUBLIC_URL}/video-thumbnail2.jpg`} alt="Video Thumbnail" className="thumbnail" />
          <div className="video-info">
            <h3>普京 德国</h3>
            <p>SHA SA </p>
          </div>
          <form onSubmit={handleSearchSubmit} className="google-search-form">
            <input
              type="text"
              placeholder="Google Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="google-search-bar"
            />
            <button type="submit" className="google-search-button">Search</button>
          </form>
        </div>
        <div className="video-card">
          <img src={`${process.env.PUBLIC_URL}/video-thumbnail3.jpg`} alt="Video Thumbnail" className="thumbnail" />
          <div className="video-info">
            <h3>《黑神话·悟空》是用什么编程语言开发的？薪资如何？</h3>
            <p>Jack Cui</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;