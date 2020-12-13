import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    margin: '6%',
    height: 0,
    paddingTop: '106.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '30%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '25px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    // margin: '5px',
    padding: '0 20px',
    marginBottom: '-6px',
    margin: '-4px'
  },
  title: {
   padding: '0 15px',
   color: 'rgba(207, 91, 108)',
   marginBottom: '-16px',
    
  },
  message: {
    
    marginBottom: '-10px',
     
   },
  cardActions: {
    padding: '0 16px 0px 6px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
});