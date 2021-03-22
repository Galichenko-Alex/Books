import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Book } from '../../store/booksSlice/booksSlice';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  contentWrapper: {
    position: 'relative',
  },
  image: { width: '100%', height: '350px', borderRadius: '10px' },
  author: { fontSize: '14px', color: 'gray' },
  genre: {
    position: 'absolute',
    fontSize: '14px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '5px 10px',
    borderRadius: '10px',
    top: '285px',
    right: '20px',
  },
});

interface BookCardProps extends Book {}

function BookCard({ id, author, description, thumbnailUrl, genre, title }: BookCardProps) {
  const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
      <img alt={title} src={thumbnailUrl} className={classes.image} />
      <Typography className={classes.genre}>{genre}</Typography>
      <Typography>{title}</Typography>
      <Typography className={classes.author}>{author}</Typography>
    </div>
  );
}

export default BookCard;
