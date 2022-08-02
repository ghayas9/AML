import React from 'react';
import '../SearchBar/SearchBar.css';
import SearchIcon from '../../images/searchicon.png';


const SearchBar = ({placeholder}) => {
  return (
    <div className='searchBar_main'>
        <div className='search_main'>
            <img src={SearchIcon} alt='icon' className='search_icon_css' /> 
            <input type='search' placeholder={placeholder} className='searchInputfield'  />
        </div>
    </div>
  )
}

export default SearchBar