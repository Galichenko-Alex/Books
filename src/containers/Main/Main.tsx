import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header';
import BooksGrid from '../BooksGrid/BooksGrid';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '25px',
    height: '100%',
  },
});

function Main() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Header />
      <BooksGrid />
    </Grid>
  );
}

export default Main;
