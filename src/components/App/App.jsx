import { useState, useEffect } from 'react';

import { Toaster } from 'react-hot-toast';
import fetchPhoto from '../../api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [images, setImages] = useState({
    items: [],
    loading: false,
    error: false,
  });

  const onSearch = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages({
      items: [],
      loading: true,
      error: false,
    });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setImages(prevElements => ({
          ...prevElements,
          loading: true,
          error: false,
        }));
        const response = await fetchPhoto(query, page);
        setImages(prevElements => ({
          ...prevElements,
          items: [...prevElements.items, ...response.results],
        }));

        setImages(prevData => ({ ...prevData, loading: false, error: false }));

        setTotalPages(response.total_pages);
      } catch (error) {
        setImages(prevElements => ({
          ...prevElements,
          error: true,
        }));
      } finally {
        setImages(prevElements => ({
          ...prevElements,
          loading: false,
        }));
      }
    }

    fetchData();
  }, [query, page]);

  const { items, loading, error } = images;

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {error && <ErrorMessage />}
      {items.length > 0 && <ImageGallery items={items} />}
      {loading && <Loader />}
      {items.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
