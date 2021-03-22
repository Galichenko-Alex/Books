import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Main from './containers/Main/Main';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Main />
    </div>
  );
}

export default App;
