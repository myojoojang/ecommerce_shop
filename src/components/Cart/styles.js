import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    margin: '20px',
    textShadow: '#00ff00 5px 5px',
    fontWeight: 700
  },
  itemGrid: {
    border: '3px solid black',
    display: "flex",
    flexWrap: 'wrap',
    margin: '10px',
    boxShadow: "10px 10px 0px -1px #000000",
  },
  itemGridDetail: {
    marginLeft: '10px',
    textTransform: 'lowercase'

  },
  thumbnail: {
    width: "100%",
    objectFit: 'cover',
    maxWidth: '80px',
    height: '80px',
    margin: '5px',
    boxShadow: "5px 5px 0px -1px #ff40ff",
  },
  emptyButton: {
    borderRadius: '0',
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '5px',
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    borderRadius: '0',
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cartDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '20px',
    backgroundColor: 'black',
    color: 'white',
    padding: '40px',
    boxShadow: "10px 10px 0px -1px #00ff00",
    border: '3px solid black',

  },

}))