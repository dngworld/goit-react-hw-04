import { useState, useEffect } from 'react';

// import './App.css'
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
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
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
        setLoading(true);
        setError(false);
        const fetchedData = await fetchPhoto(query.split('/')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedData]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster />
    </div>
  );
};

export default App;
