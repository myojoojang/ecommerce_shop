import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

import { Link } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div>
            <Typography component={Link} to="/" className={classes.title}>
              NEONESS
            </Typography>
          </div>
          {/* <div className={classes.grow} /> */}
          <div className={classes.flex}>
            <Typography component={Link} to="/custom" className={classes.link}>
              Custom
            </Typography>
            <Typography component={Link} to="/products" className={classes.link}>
              Products
            </Typography>
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton className={classes.button} component={Link} to="/cart" area-label="Show cart item" >
              <Badge badgeContent={totalItems} color="primary" >
                <ShoppingCart className={classes.buttonIcon} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
        <Toolbar className={classes.navOnMobile}>

          <Typography component={Link} to="/custom" className={classes.link}>
            Custom
          </Typography> /
          <Typography component={Link} to="/products" className={classes.link}>
            Products
          </Typography>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
