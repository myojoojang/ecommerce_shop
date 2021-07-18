import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  root: {
    maxWidth: '100%',
    height: '100%',
    boxShadow: "10px 10px 0px -1px #000000",
    border: "black solid 3px",
    borderRadius: "0"
  },
  name: {
    fontWeight: 700,
    textTransform: 'lowercase',
    fontSize: '20px',
  },
  price: {
    fontSize: '16px',
    textTransform: 'lowercase',
  },
  media: {
    height: "50vh",
    width: "100%",
    objectFit: 'cover',

  },
  cardActions: {
    display: "flex",
    background: "black",
    padding: "0",
    border: "2px white solid",
    transition: "0.3s ease-out",
    '&:hover': {
      background: "#00ff00",
      boxShadow: "0 0 0 2px black inset",
    },
  },
  button: {
    width: "100%",
    height: "100%",
    color: "white",
    fontWeight: "500",
    borderRadius: "0",
    '&:hover': {
      color: "black"
    },
    padding: '10px'
  },

  cardContent: {
    display: "flex",
    justifyContent: 'space-between'
  }

}))