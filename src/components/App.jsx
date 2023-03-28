import { useState } from 'react';
import * as API from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppGrid } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { DowlandMore } from './Button/Button';
import { RotatingLines } from 'react-loader-spinner';
import { SpinnerBox } from './App.styled';
export function App  (){
  const [photo, setPhoto] = useState([]);
  const [page, setPage] = useState(2);
  const [name, setName] = useState("");
  const [statusBtn, setStatusBtn] = useState(false);
  const [statusSpiner, setStatusSpiner] = useState(false);
 

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

  const getCard = async ({ name }) => {
    if (name.trim()) {
      this.setState({
        name,
      });
      try {
        const material = await API.getPhoto(name, 1);
        cheackStatus(material);
        this.setState(state => ({
          photo: [...state.photo, ...material],
        }));
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('Wrong request.🦄', { theme: 'dark' });
    }
  };

  const loadMore = async () => {
    this.setState({ statusSpiner: true, statusBtn: false });
    try {
      const material = await API.getPhoto(this.state.name, this.state.page);
      this.cheackStatus(material);
      this.setState(state => ({
        photo: [...state.photo, ...material],
        page: state.page + 1,
      }));
    } catch (error) {
      console.log(error);
    }
  };


    // const { statusBtn, statusSpiner } = this.state;
    return (
      <AppGrid>
        <SearchBar onSubmit={this.getCard} />
        <ImageGallery items={this.state.photo} />
        {statusBtn && <DowlandMore onSearch={this.loadMore} />}
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

