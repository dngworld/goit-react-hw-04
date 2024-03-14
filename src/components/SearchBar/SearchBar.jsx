import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
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
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <span>Search </span>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
