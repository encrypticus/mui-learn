import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  InputBase,
  Slide,
  useScrollTrigger
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/Link';
import {MobileMenu} from '../contex-menus/mobile';
import {ProfileMenu} from '../contex-menus/profile';
import { useStyles } from './styles';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  );
};

const MainNav = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (event) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    const { currentTarget: { dataset: { name } } } = event;
    name && name === 'signIn' ? console.log('Вы вошли') : console.log('Вы зарегались');
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderProfileMenu = () => (
    <ProfileMenu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
    />
  );

  const renderMobileMenu = () => (
    <MobileMenu
      anchorEl={mobileMoreAnchorEl}
      open={isMobileMenuOpen}
      profileMenuOpen={handleProfileMenuOpen}
      onClose={handleMenuClose}
    />
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <IconButton className={classes.burgerButton}>
              <MenuIcon className={classes.burgerIcon}/>
            </IconButton>

            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>

            <ul className={classes.navList}>

              <li className={classes.navItem}>
                <Link href={'/'} component={'button'}>
                  <Button className={classes.navLink} href={'/'}>
                    home
                  </Button>
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link href={'/about'} component={'button'}>
                  <Button className={classes.navLink} href={'/about'}>
                    about
                  </Button>
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link href={'/about'} component={'button'}>
                  <Button className={classes.navLink} href={'/about'}>
                    faq
                  </Button>
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link href={'/about'} component={'button'}>
                  <Button className={classes.navLink} href={'/about'}>
                    contacts
                  </Button>
                </Link>
              </li>

            </ul>

            <div className={classes.search}>
              <SearchIcon className={classes.searchIcon}/>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                placeholder='Поиск'
              />
            </div>

            <IconButton
              className={classes.userButton}
              onClick={handleProfileMenuOpen}
            >
              <AccountBoxIcon className={classes.userIcon}/>
            </IconButton>

            <IconButton
              className={classes.menuButton}
              onClick={handleMobileMenuOpen}
            >
              <MoreVertIcon/>
            </IconButton>

            {renderMobileMenu()}
            {renderProfileMenu()}

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.offset}/>
    </>
  );
};

export default MainNav;
