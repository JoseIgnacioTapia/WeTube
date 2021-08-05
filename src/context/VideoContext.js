import React, { useState, useEffect, createContext, Children } from 'react';
import axios from 'axios';

// Creating Custom Context
export const VideoContext = createContext();

const VideoProvider = props => {
  const [idVideo, setIdVideo] = useState(null);
  const [selectVideo, setSelectVideo] = useState({});
  const [consulting, setConsulting] = useState(false);

  // Calling API
  useEffect(() => {
    if (consulting) {
      const displayVideo = async () => {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&id=${idVideo}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

        try {
          const res = await axios.get(url);
          console.log(url);
          console.log(res.data.items[0]);
          setSelectVideo(res.data.items[0]);
        } catch (error) {
          console.log(error);
        }
      };

      displayVideo();
    }
  }, [idVideo]);

  return (
    <VideoContext.Provider
      value={{ setIdVideo, selectVideo, setSelectVideo, setConsulting }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
