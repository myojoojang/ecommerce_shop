import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  root: {
    maxWidth: '100%',
    boxShadow: "10px 10px 0px -1px #000000",
    border: "black solid 3px",
    borderRadius: "0"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
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
  },

  cardContent: {
    display: "flex",
    justifyContent: 'space-between'
  }

}))