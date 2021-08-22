import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  center: {
    textAlign: 'center',
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
    boxShadow: 'none'
  },
  checkoutButton: {
    borderRadius: '0',
    minWidth: '150px',
    boxShadow: 'none'

  },
  link: {
    textDecoration: 'none',
  },
  margin: {
    marginTop: "40px",
    marginBottom: '40px'
  }


}))