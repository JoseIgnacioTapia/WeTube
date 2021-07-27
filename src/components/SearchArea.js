const SearchArea = () => {
  const keyword = 'football';

  return (
    <div>
      <form>
        <label htmlFor="keyword">
          Search
          <input type="text" id="keyword" value={keyword} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchArea;
