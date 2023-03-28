import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';
import { Formik } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ name }) => {
    if (!name.trim()) {
      toast.error('Wrong request.🦄', { theme: 'dark' });
    }

    onSubmit(name);
  };

  return (
    <Searchbar>
      <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
        <SearchForm autoComplete="off">
          <SearchFormButton type="submit">
            <FaSearch size={20} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Searchbar>
  );
};
