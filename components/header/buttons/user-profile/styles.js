import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
}));
