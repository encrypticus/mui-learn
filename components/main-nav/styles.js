import { makeStyles, fade } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';

export const useStyles = makeStyles((theme => ({
  root: {
    // position: 'static',
    backgroundColor: teal[400],
    color: theme.palette.common.white,
    width: '100%',
    minWidth: '320px'
  },
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
  },
  title: {
    [theme.breakpoints.down('601')]: {
      display: 'none'
    }
  },
  navList: {
    width: '600px',
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    marginLeft: '26%',
    padding: 0,
    [theme.breakpoints.down('1367')]: {
      marginLeft: '10%'
    },
    [theme.breakpoints.down('1100')]: {
      width: '400px'
    },
    [theme.breakpoints.down('769')]: {
      width: 'auto'
    },
    [theme.breakpoints.down('601')]: {
      display: 'none'
    }
  },
  navItem: {},
  navLink: {
    display: 'flex',
    padding: '10px 20px',
    color: 'inherit',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  menuButton: {
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
  },
  searchIcon: {
    position: 'absolute',
    left: 10
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, .15),
    borderRadius: theme.shape.borderRadius,
    paddingLeft: '40px',
    marginLeft: 'auto'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    width: 60,
    [theme.breakpoints.down('601')]: {
      width: '100%'
    },
    transition: 'width .2s',
    '&:focus': {
      width: '200px',
      [theme.breakpoints.down('601')]: {
        width: '100%'
      }
    }
  },
  offset: theme.mixins.toolbar
})));
