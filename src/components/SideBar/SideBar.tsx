import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useSearch from '../../hooks/useSearch';

function SideBar() {
  const { setSearchString, searchString } = useSearch();

  return (
    <Grid>
      <TextField onChange={(event) => setSearchString(event.target.value)} value={searchString} />
    </Grid>
  );
}

export default SideBar;
