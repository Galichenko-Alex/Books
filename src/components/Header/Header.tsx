import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../SearchBar/SearchBar';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
    paddingBottom: '15px',
  },
});

function Header() {
  const classes = useStyles();
  return (
    // <Grid className={classes.header} direction="row" justify="space-between" container item>
    <div className={classes.header}>
      <div>
        <Typography component="h2">Book Library</Typography>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
