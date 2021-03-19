import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    padding: '25px',
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.header} container>
      <Typography component="h2">Book Library</Typography>
    </Grid>
  );
}

export default Header;
