import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,useHistory } from 'react-router-dom';
import './Feed.css'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Feed(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // Import data from another component

  const {body,title,id} = props.feed;
  
  const history = useHistory();
  
  const handleClick = (id) =>{
    const url = `/feed-details/${id}` ;
   
    history.push(url);
   
  }
  return (
      <div className='cards'>
          
     
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h4>{title}</h4>
         <h4>{props.feed.length}</h4>
        </Typography>
        <Typography variant="h5" component="h2">
         <h6>{body}...</h6>
        </Typography>
       
       
      </CardContent>
      <CardActions>
          <Link className="more-button" to = {`/feed-details/${id}`}>
            
            <Button onClick = {() => handleClick(id)}>View More</Button>
            
          </Link>
      </CardActions>
    </Card>
    </div>
   
  );
}