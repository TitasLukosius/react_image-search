import React, { useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import SearchBar from '../components/searchBar';
import ImageList from '../components/imageList';
import KeywordList from '../components/keywordList';

const MainWrapper = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  const onSearchSubmit = async(searchVal) => {

        setLoading(true);
        console.log(searchVal);
        const response = await axios
        .get('https://api.unsplash.com/search/photos', {
          params: { query: searchVal},
          headers: {
            Authorization: `Client-ID ${API_KEY}`
          },
        }).catch(function (error) {
          console.log((error));
        });

        if(!response.data.total) {
          setImages([]);
          setErrorMsg('Sorry! There were no images found.. :(');
        } else {
          setImages(response.data.results);
          setErrorMsg('');
        }
        
        setLoading(false);
    }

      return (
          <div className="mainWrapper">
              <div className='searchImages'>
                <h1 className='title'>Image Search</h1>
                <SearchBar onSearchSubmit={onSearchSubmit}/>
                {loading ? <ReactBootStrap.Spinner animation="border" /> : ('')}
                <ImageList images={images}/> 
                <h2>{errorMsg}</h2>
              </div>
              <div className='keywordList'>
                <h3>Saved Keywords</h3>
                <KeywordList onSearchSubmit={onSearchSubmit}/>
              </div>
          </div>
      )
}

export default MainWrapper;
