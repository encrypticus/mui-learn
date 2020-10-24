import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  burgerButton: {
    display: 'none',
    padding: '10px',
    color: '#fff',
    [theme.breakpoints.down('601')]: {
      display: 'block'
    }
  },
  burgerIcon: {
    width: '2rem',
    height: '2rem'
  }
}));
