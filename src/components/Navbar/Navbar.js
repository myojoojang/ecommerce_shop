import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography className={classes.title}>
            LOGO HERE
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton area-label="Show cart item" >
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCart className={classes.buttonIcon} />
              </Badge>
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
