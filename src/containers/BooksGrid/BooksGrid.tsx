import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import BookCard from '../../components/BookCard/BookCard';
import useBooks from '../../hooks/useBooks';

const useStyles = makeStyles({
  bookGrid: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: '25px',
    paddingTop: '25px',
    position: 'relative',
  },

  loaderSpinner: {
    position: 'absolute',
    left: '50%',
    top: '200px',
  },
});

function BooksGrid() {
  const { isLoading, visibleBooks } = useBooks();
  const classes = useStyles();
  return (
    <div className={classes.bookGrid}>
      {isLoading ? (
        <CircularProgress className={classes.loaderSpinner} />
      ) : (
        visibleBooks.map(({ id, description, author, thumbnailUrl, title, genre }) => (
          <BookCard
            key={id}
            id={id}
            genre={genre}
            description={description}
            title={title}
            author={author}
            thumbnailUrl={thumbnailUrl}
          />
        ))
      )}
    </div>
  );
}

export default BooksGrid;
