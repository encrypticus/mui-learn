import { makeStyles } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';

export const useStyles = makeStyles((theme => ({
  root: {
    backgroundColor: teal[400],
    color: theme.palette.common.white,
    width: '100%',
    minWidth: '320px'
  },
  title: {
    [theme.breakpoints.down('601')]: {
      display: 'none'
    }
  },menuButton: {
    display: 'none',
    marginLeft: 'auto',
    color: theme.palette.common.white,
    [theme.breakpoints.down('601')]: {
      display: 'block'
    }
  },
  userButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('601')]: {
      display: 'none'
    }
  },
  userIcon: {
    color: theme.palette.common.white,
    width: '2rem',
    height: 'auto'
  }
})));
