import SearchArea from './components/SearchArea';
import Header from './components/Header';
import Results from './components/Results';

import SearchProvider from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Header />
      <SearchArea />
      <Results />
    </SearchProvider>
  );
}

export default App;
