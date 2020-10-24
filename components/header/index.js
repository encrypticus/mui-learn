import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger
} from '@material-ui/core';
import { useStyles } from './styles';
import { BurgerMenuButton } from './buttons/burger-menu';
import { UserProfileButton } from './buttons/user-profile';
import { MobileMenuButton } from './buttons/mobile-menu';
import { MobileMenu } from './contex-menus/mobile';
import { Search } from './search';
import { ProfileMenu } from './contex-menus/profile';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
            <BurgerMenuButton/>

            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>

            <Search/>

            <UserProfileButton handleProfileMenuOpen={handleProfileMenuOpen}/>

            <MobileMenuButton handleMobileMenuOpen={handleMobileMenuOpen}/>
          </Toolbar>

          {renderMobileMenu()}
          {renderProfileMenu()}
        </AppBar>
      </HideOnScroll>
      <Toolbar/>
    </>
  );
};