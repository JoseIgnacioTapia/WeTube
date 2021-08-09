import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { useDropdown } from '../hooks/useDropdown';
import styled from 'styled-components';

const AdvanceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const SearchArea = () => {
  const [search, setSearch] = useState('');

  const { setKeyword, setOrder, setVideoDuration, setLooking } =
    useContext(SearchContext);

  const orderList = ['date', 'relevance', 'rating'];
  const [order, OrderDropdown, setOrderDropdown] = useDropdown(
    'Order By',
    'relevance',
    orderList
  );

  const [videoDuration, VideoDurationDropdown, setVideoDropdown] = useDropdown(
    'Video Duration',
    'any',
    ['any', 'short', 'medium', 'long']
  );

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setOrder(order);
    setVideoDuration(videoDuration);
  }, [order, videoDuration]);

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
        <AdvanceContainer>
          <label htmlFor="advanced">Advanced Search</label>
          <input
            type="checkbox"
            id="advanced"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </AdvanceContainer>
        {checked ? (
          <>
            <OrderDropdown />
            <VideoDurationDropdown />
          </>
        ) : null}

        <button className="w-full bg-indigo-600 text-white p-2 rounded-md mb-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default SearchArea;
