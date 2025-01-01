import SearchIcon from '../SVGs/SearchIcon';

const Search = () => {
  return (
    <div className='search'>
      <input className='search-input' placeholder='Search ...' />
      <div className='search-icon'>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Search;