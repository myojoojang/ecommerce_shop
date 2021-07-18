import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography>
            LOGO HERE
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton area-label="Show cart item" >
              <Badge badgeContent={2} color="secondary">
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
