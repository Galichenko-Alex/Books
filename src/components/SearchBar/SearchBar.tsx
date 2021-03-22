import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useSearch from '../../hooks/useSearch';

const useStyles = makeStyles({
  searchbox: {
    width: '100%',
  },
});

function SearchBar() {
  const { setSearchString, searchString } = useSearch();
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      className={classes.searchbox}
      onChange={(event) => setSearchString(event.target.value)}
      value={searchString}
    />
  );
}

export default SearchBar;
