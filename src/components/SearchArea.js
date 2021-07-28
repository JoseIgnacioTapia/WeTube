import { useState } from 'react';
import Results from './Results';

const SearchArea = () => {
  const [keyword, setKeyword] = useState('');

  const requestSearch = () => {
    console.log('submitted');
  };

  return (
    <>
      <form
        style={{ maxWidth: '50%' }}
        className="mt-5 mx-auto flex flex-col items-center justify-between"
        onSubmit={e => {
          e.preventDefault();
          requestSearch();
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
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button className="w-full bg-indigo-600 text-white p-2 rounded-md mb-4">
          Submit
        </button>
      </form>
      <Results />
    </>
  );
};

export default SearchArea;
