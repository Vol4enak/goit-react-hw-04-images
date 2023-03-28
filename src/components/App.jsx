import { useEffect, useState } from 'react';
import * as API from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppGrid } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { DowlandMore } from './Button/Button';
import { RotatingLines } from 'react-loader-spinner';
import { SpinnerBox } from './App.styled';
export function App() {
  const [photo, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [statusBtn, setStatusBtn] = useState(false);
  const [statusSpiner, setStatusSpiner] = useState(false);
  const [statusDowlandMore, setstatusDowlandMore] = useState(false);

  const cheackStatus = material => {
    setStatusBtn(true);
    setStatusSpiner(false);
    if (material.length !== 12) {
      setStatusBtn(false);
    }
    if (material.length === 0) {
      toast.warn('Nothing was found for your request.🦄', { theme: 'dark' });
    }
  };

  const handleChange = num => {
    console.log(num);
    setstatusDowlandMore(true);
    setPage(prevPage => prevPage + num);
  };

  useEffect(() => {
    if (name.trim()) {
      console.log(name.trim());
      const getCard = async () => {
        setStatusSpiner(true);
        setPage(1);
        const material = await API.getPhoto(name, 1);

        setPhoto(material);
        cheackStatus(material);
        // setPhoto(prevPhoto => [...prevPhoto, ...material]);
      };

      getCard().catch(console.error);
    }
  }, [name]);

  useEffect(() => {
    if (statusDowlandMore) {
      const loadMore = async () => {
        setStatusBtn(false);
        setStatusSpiner(true);

        const material = await API.getPhoto(name, page);
        cheackStatus(material);
        setPhoto(prevPhoto => [...prevPhoto, ...material]);
      };
      loadMore().catch(console.error);
      setstatusDowlandMore(false);
    }
  }, [name, page, statusDowlandMore]);


  return (
    <AppGrid>
      <SearchBar onSubmit={setName} />
      <ImageGallery items={photo} />
      {statusBtn && <DowlandMore onSearch={handleChange} />}
      {statusSpiner && (
        <SpinnerBox>
          <RotatingLines
            strokeColor="green"
            animationDuration="0.75"
            width="56"
            visible={true}
          />
        </SpinnerBox>
      )}
      <ToastContainer />
    </AppGrid>
  );
}

//    if (name.trim()) {
//      console.log(123);
//      try {
//        const material = await API.getPhoto(name, 1);
//        cheackStatus(material);
//        setPhoto(prevPhoto => [...prevPhoto, ...material]);
//      } catch (error) {
//        console.log(error);
//      }
//    } else {
//      toast.error('Wrong request.🦄', { theme: 'dark' });
//    }
//  };
