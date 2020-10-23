import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, InputBase } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from 'next/Link';
import { useStyles } from './styles';

const MainNav = () => {
  const classes = useStyles();

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
          <InputBase
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            placeholder='Поиск'
          />
        </div>

        <IconButton className={classes.menuButton}>
          <MoreVertIcon className={classes.menuIcon}/>
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
