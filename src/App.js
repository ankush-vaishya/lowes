import { useState } from 'react';
import unsplash from './api/unsplash';
import './App.scss';
import EmptyStateComponent from './components/EmptyStateComponent';
import ImageListComponent from './components/ImageListComponent';
import SearchbarComponent from './components/SearchbarComponent';

function App() {
  const [imageListData, setImageListData] = useState([]);
  function fetchImages(searchString) {
    if (searchString) {
      unsplash.get('/search/photos', {
        params: { query: searchString },
      }).then((res) => {
        setImageListData(res?.data?.results);
      }).catch(() => alert('Something went wrong. Please try after sometime.'))
    } else {
      setImageListData([]);
    }
  }

  return (
    <>
      <div className="searchboar-container">
        <SearchbarComponent onSearchSubmit={fetchImages} />
      </div>
      <section className='image-list-container'>
        <ImageListComponent imageListData={imageListData} />
        {
          !imageListData.length && (
            <EmptyStateComponent />
          )
        }
      </section>

    </>
  );
}

export default App;
