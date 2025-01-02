import { useContext } from 'react';
import SearchIcon from '../SVGs/SearchIcon';
import { BlogsContext } from '../../context';

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(BlogsContext);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='search'>
      <input
        className='search-input'
        placeholder='Search ...'
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className='search-icon'>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Search;