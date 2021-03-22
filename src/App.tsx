import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Main from './containers/Main/Main';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid direction="row" className={classes.app} container>
      <Main />
    </Grid>
  );
}

export default App;
