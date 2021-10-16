import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid, Typography } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    width:"470px",
    height: 18,
    borderRadius: 5,
    [theme.breakpoints.down('sm')]:{
        width:"350px"
    },
    
  },

  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));


  
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars({score,index,desc}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid>
     <Typography variant="body2">{desc}</Typography>
     <BorderLinearProgress variant="determinate" value= {(score*100)} />   
     </Grid>
     
    </div>
  );
}
