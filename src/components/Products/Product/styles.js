import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  root: {
    maxWidth: '100%',
    height: '100%',
    padding: '5px',
    margin: '20px 0',
    boxShadow: "10px 10px 0px -1px #000000",
    border: "black solid 3px",
    borderRadius: "0",
    transition: "0.2s ease-out",
    display: 'flex',
    flexDirection: 'column ',
    justifyContent: 'space-between',
    '&:hover': {
      transform: "scale(1.02)",
      boxShadow: "10px 10px 0px -1px #ff40ff",
    },
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
    padding: '0',
    background: "black",
    transition: "0.3s ease-out",
    '&:hover': {
      background: "#00ff00",
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