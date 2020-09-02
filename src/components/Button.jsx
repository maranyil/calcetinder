import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  botoncito: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '20px'
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.botoncito}>
      <Button variant="contained">
        Not a Match
        </Button>
      <Button variant="contained" color="secondary">
        It's a Match
      </Button>
    </div>
  );
}
