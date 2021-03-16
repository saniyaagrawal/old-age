import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height:250,
    width:220,
    margin:13
  },
  media: {
    height:150,
    minHeight:150,
  },
});

function MemberCard({id, data}) {

  const classes = useStyles();

  const images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrUCpkNzYL0qyUoFPh0edSK6b0rXpreXLHg&usqp=CAU'];

  return (
    <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={data.image}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h4">
                    <div style={{flex:1,display:'flex',justifyContent:'space-between', alignItems:'center', fontSize:18}}>
                    {data.name}
                    </div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <div style={{flex:1,display:'flex', alignItems:'center', fontSize:15}}>{data.position}</div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <div style={{display:'flex', justifyContent:'space-between', fontSize:12}}>
                        {data.occupation}
                    </div>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}

export default MemberCard;

