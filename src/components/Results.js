import { useContext } from 'react';
import Video from './Video';
import Spinner from './Spinner';
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
  const { keyword, videos, looking, loading } = useContext(SearchContext);

  const displayResult =
    looking && videos.length === 0 ? (
      <div className="text-red-700 px-4 py-3 border border-red-400 rounded ">
        No results found. Try another search please!
      </div>
    ) : (
      videos.map(video => {
        return <Video key={video.id.videoId} video={video} />;
      })
    );

  return (
    <Container>
      {looking && <ResultTitle>Results ({keyword}):</ResultTitle>}
      {loading ? <Spinner /> : displayResult}
    </Container>
  );
};

export default Results;
