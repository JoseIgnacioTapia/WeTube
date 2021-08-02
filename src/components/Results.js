import { useState, useContext } from 'react';
import Video from './Video';
import styled from 'styled-components';

import { SearchContext } from '../context/SearchContext';

const Container = styled.div`
  max-width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;
`;

const ResultTitle = styled.h3`
  display: inline-block;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
`;

const Results = () => {
  const { keyword, videos } = useContext(SearchContext);

  return (
    <Container>
      <ResultTitle>Results ({keyword}):</ResultTitle>
      {videos.map(video => {
        return <Video key={video.id.videoId} video={video} />;
      })}
    </Container>
  );
};

export default Results;
