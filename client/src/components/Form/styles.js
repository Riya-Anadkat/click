
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  heading: {
    color: 'rgba(207, 91, 108)',
  },
  textfield: {
    marginTop: 15,
  },
  image: {
    marginTop: 70,
    marginLeft: 130,

  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '10px',
    width: "100%",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));