import { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchArea = () => {
  const [search, setSearch] = useState('');

  const { setKeyword, setLooking } = useContext(SearchContext);

  return (
    <>
      <form
        style={{ maxWidth: '50%' }}
        className="mt-5 mx-auto flex flex-col items-center justify-between"
        onSubmit={e => {
          e.preventDefault();
          setKeyword(search);
          setLooking(true);
          setSearch('');
        }}
      >
        <label
          htmlFor="keyword"
          className="pt-5 font-medium text-black text-center text-xl"
        >
          Search
        </label>
        <input
          type="text"
          className="w-full text-center py-2 border mt-3 border-gray-300 rounded-md mb-4"
          id="keyword"
          value={search}
          placeholder="Keywords"
          onChange={e => setSearch(e.target.value)}
        />
        <button className="w-full bg-indigo-600 text-white p-2 rounded-md mb-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default SearchArea;
