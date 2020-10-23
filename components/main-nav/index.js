import React, { useEffect, useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Grow,
  Fade
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/Link';
import { useStyles } from './styles';

const MainNav = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(ref.current);
  });

  const openMenuHandler = (event) => {
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setOpenMenu(false);
  };

  return (
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
          ref={ref}
          onClick={openMenuHandler}
        >
          <AccountBoxIcon className={classes.userIcon}/>
        </IconButton>

        <IconButton className={classes.menuButton}>
          <MoreVertIcon className={classes.menuIcon}/>
        </IconButton>

        <Menu
          open={openMenu}
          anchorEl={ref.current}
          keepMounted
          onClose={closeMenuHandler}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          getContentAnchorEl={null}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={closeMenuHandler}>
            Регистрация
          </MenuItem>
          <MenuItem onClick={closeMenuHandler}>
            Вход
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
