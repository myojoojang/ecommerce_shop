import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  media: {
    height: 260
  },

  thumbnail: {
    width: "100%",
    objectFit: 'cover',
    maxWidth: '80px',
    height: '80px',
    margin: '5px',
    boxShadow: "5px 5px 0px -1px #ff40ff",
  },

  itemGrid: {
    border: '3px solid black',
    display: "flex",
    margin: '10px',
    justifyContent: 'space-between',
    boxShadow: "10px 10px 0px -1px #000000",
    transition: "0.2s ease-out",
    '&:hover': {
      transform: "scale(1.02)"

    },
    width: '100%'

  },

  deleteButtonBox: {
    justifySelf: 'end'
  },

  buttons: {
    borderRadius: '50px',
    transition: "0.3s ease-out",
    minWidth: '30px',
    margin: '5px'
  },

  itemGridDetail: {
    display: 'flex',
    width: '100%'
  },
  itemGridText: {
    marginLeft: '10px',
    textTransform: 'lowercase',

  },

}))