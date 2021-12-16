import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

// Creating Custom Context
export const SearchContext = createContext();

const SearchProvider = props => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState('');
  const [videoDuration, setVideoDuration] = useState('');
  const [looking, setLooking] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calling API
  useEffect(() => {
    if (looking) {
      const getVideos = async () => {
        const options = {
          method: 'GET',
          url: 'http://localhost:8000/videos',
          params: { q: keyword, order: order, videoDuration: videoDuration },
        };

        try {
          setLoading(true);
          axios.request(options).then(response => {
            setVideos(response.data.items);
          });
        } catch (error) {
          setVideos(null);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      getVideos();
    }
  }, [keyword, order, videoDuration, looking]);

  return (
    <SearchContext.Provider
      value={{
        videos,
        setKeyword,
        keyword,
        setOrder,
        setVideoDuration,
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
