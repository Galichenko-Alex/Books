import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { books } from '../mocks/books';
import { fetchBooks, mockAPISuccessRequest, selectIsLoading, selectVisibleBooks } from '../store/booksSlice/booksSlice';

const useBooks = () => {
  const isLoading = useSelector(selectIsLoading);
  const visibleBooks = useSelector(selectVisibleBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(mockAPISuccessRequest(books));
  }, [dispatch]);

  return { isLoading, visibleBooks };
};

export default useBooks;
