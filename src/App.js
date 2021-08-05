import SearchArea from './components/SearchArea';
import Header from './components/Header';
import Results from './components/Results';

import SearchProvider from './context/SearchContext';
import VideoProvider from './context/VideoContext';

function App() {
  return (
    <SearchProvider>
      <VideoProvider>
        <Header />
        <SearchArea />
        <Results />
      </VideoProvider>
    </SearchProvider>
  );
}

export default App;
