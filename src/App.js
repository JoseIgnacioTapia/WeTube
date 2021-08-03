import SearchArea from './components/SearchArea';
import Header from './components/Header';
import Results from './components/Results';

import SearchProvider from './context/SearchContext';
import Modal from './components/Modal';

function App() {
  return (
    <SearchProvider>
      <Header />
      <SearchArea />
      <Results />
      <Modal />
    </SearchProvider>
  );
}

export default App;
