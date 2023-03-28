import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import { FaSearch } from 'react-icons/fa';
import { Formik } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (name) => {
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
