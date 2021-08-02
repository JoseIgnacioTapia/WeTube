import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// Creating Custom Context
export const SearchContext = createContext();

const SearchProvider = props => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [looking, setLooking] = useState(false);

  // Calling API
  useEffect(() => {
    if (looking) {
      const getVideos = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

        try {
          const res = await axios.get(url);
          console.log(res);
          console.log(url);
          console.log(res.data.items);
          setVideos(res.data.items);
        } catch (error) {
          setVideos(null);
          setError(error);
        }
      };
      getVideos();
    }
  }, [keyword]);

  return (
    <SearchContext.Provider
      value={{
        videos,
        setKeyword,
        keyword,
        setVideos,
        error,
        setLooking,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
