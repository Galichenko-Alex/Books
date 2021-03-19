import { useDispatch, useSelector } from 'react-redux';
import { searchBooks, selectSearchString } from '../store/booksSlice/booksSlice';

const useSearch = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(selectSearchString);

  const setSearchString = (value: string) => {
    dispatch(searchBooks(value));
  };

  return { setSearchString, searchString };
};

export default useSearch;
