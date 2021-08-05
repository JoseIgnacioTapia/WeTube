import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// Creating Custom Context
export const SearchContext = createContext();

const SearchProvider = props => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [looking, setLooking] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calling API
  useEffect(() => {
    if (looking) {
      const getVideos = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

        try {
          setLoading(true);
          const res = await axios.get(url);
          setVideos(res.data.items);
        } catch (error) {
          setVideos(null);
          setError(error);
        } finally {
          setLoading(false);
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
        looking,
        loading,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
