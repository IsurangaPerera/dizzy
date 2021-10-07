// React
import React, { Fragment, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Router
import { useLocation } from 'react-router-dom';

// Material
import { Menu as MenuIcon } from '@material-ui/icons';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';

// Components
import Action from './Action';
import Menu from './Menu';

// Styles
import { useStyles, Logo } from './Header-styles';

const Header = () => {
  // Variables
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAuth = useSelector((state) => state.auth.data.token !== null);
  const showLogo = isAuth && location.pathname !== '/main';

  // Handlers
  const toggleMenuHandler = () => {
    setOpen(!open);
  };

  // JSX
  const view = (
    <Fragment>
      <Menu open={open} onClose={toggleMenuHandler} isAuth={isAuth} />
      <AppBar
        className={classes.root}
        position="relative"
        color="transparent"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            onClick={toggleMenuHandler}
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {showLogo ? <Logo height={25} /> : null}
          <Action isAuth={isAuth} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );

  return view;
};

export default Header;
