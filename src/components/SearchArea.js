import Results from './Results';

const SearchArea = () => {
  const keyword = 'football';

  return (
    <>
      <form
        style={{ maxWidth: '50%' }}
        className="mt-5 mx-auto flex flex-col items-center justify-between"
      >
        <label
          htmlFor="keyword"
          className="pt-5 font-medium text-black text-center text-xl"
        >
          Search
        </label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          className="w-full text-center py-2 border mt-3 border-gray-300 rounded-md mb-4"
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
