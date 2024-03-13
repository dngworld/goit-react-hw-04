import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSearch(event.target.elements.query.value);
    event.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
