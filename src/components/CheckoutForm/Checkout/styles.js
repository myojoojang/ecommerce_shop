import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  appBar: {
    position: 'relative',

  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto'
    },


  },
  paper: {
    border: '3px solid black',
    boxShadow: "10px 10px 0px -1px #000000",
    borderRadius: '0',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginTop: 60,

    },
    [theme.breakpoints.up(600)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(4)

    },

  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },


}

))
