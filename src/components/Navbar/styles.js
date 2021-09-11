import { makeStyles, fade } from '@material-ui/core/styles'

const drawerWidth = 0

export default makeStyles((theme) => ({
  appBar: {
    fontFamily: 'Roboto',
    boxShadow: 'none',
    display: 'flex',
    borderBottom: '3px solid black',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100%-${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }

  },
  title: {
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '28px',
    color: 'black',
    marginRight: '10px',
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    marginLeft: '10px',
    transition: "0.3s ease-out",
    '&:hover': {
      color: "#00ff00",
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  flex: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },

  navOnMobile: {
    borderTop: '3px solid black',

    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  grow: {
    width: '90%'
  },
  button: {
    backgroundColor: "black",
    borderRadius: '50%',
    color: 'white',
    transition: "0.3s ease-out",
    '&:hover': {
      background: "#ff40ff",
      color: 'black',
    },
  },


  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",

  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc (1em+${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: "100%",
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },



}))