
"use client"

import React from 'react';

const SearchOffcanvas = ({setSearchOpen, searchOpen}: any) => {
  return (
    <>
      <div className="search-wrap" style={{display: `${searchOpen ? "block" : "none"}` } }>
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" onClick={() => setSearchOpen(false)} ></i>
          <div className="search-cell">
            <form onClick={e => e.preventDefault()}>
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchOffcanvas;