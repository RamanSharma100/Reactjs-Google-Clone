import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import VoiceSearchBox from '../HomeScreen/VoiceSearchBox';

import './HeaderSearchPage.css';

const HeaderSearchPage = ({ searchTerm, setSearch }) => {
  //setTearm
  const [term, setTerm] = useState('');

  //voice search
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);
  //voice text
  const [voiceText, setVoiceText] = useState('');

  //set term
  useEffect(() => {
    setTerm(searchTerm);
  }, []);

  // clear voice search
  const clearVoiceSearch = () => {
    setIsVoiceSearch(false);
  };
  // open voice search
  const openVoiceSearch = () => {
    setIsVoiceSearch(true);
  };

  //clear term
  const clearTerm = () => {
    setTerm('');
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  //   handle search
  const handleSearch = () => {
    if (
      searchTerm !== term.trim() &&
      (/^[a-zA-Z0-9].*/.test(term.trim()) ||
        /^[a-zA-Z0-9]+[" "]/.test(term.trim()) ||
        /^[" "]+[a-zA-Z0-9]/.test(term.trim()))
    ) {
      setSearch(term.trim());
    }
  };

  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearchBox
          voiceText={voiceText}
          clearVoiceSearch={clearVoiceSearch}
          openVoiceSearch={openVoiceSearch}
        />
      ) : null}
      <div className="search-page-header">
        <div className="col-md-12">
          <nav className="navbar py-3">
            <Link to="/" className="navbar-brand">
              <img
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="Google Logo"
                height={50}
                className="image-fluid ml-5"
              />
            </Link>
            <div className="search-box col-md-5 border d-flex py-2 justify-content-between align-items-center">
              <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="term"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </form>
              {term ? (
                <i className="fa fa-close" onClick={() => clearTerm()}></i>
              ) : (
                ''
              )}
              <i
                className="fa fa-microphone"
                onClick={() => openVoiceSearch()}></i>
              <i className="fa fa-search" onClick={() => handleSearch()}></i>
            </div>
            <ul className="nav ml-auto mr-5">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fa fa-th"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fa fa-user-circle-o"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderSearchPage;
