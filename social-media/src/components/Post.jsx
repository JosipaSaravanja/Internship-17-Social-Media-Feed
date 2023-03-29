import * as React from 'react';
import {Card, CardHeader, CardContent} from '@mui/material';
import {Avatar} from '@mui/material';
import {Typography} from '@mui/material';  
import { Link } from 'react-router-dom';


export const Post=(props)=>{
  const width=props.isComment ? "960px" : "1000px"
    return <Link to={props.isComment ? "": "/" +props.post.id} className={props.isComment ? "comment": ""}>
    <Card sx={{ width: {width}, m: 1.5}}>
    <CardHeader
      avatar={
          <Avatar
            src={props.user.img}
          />
      }
      title={props.user.username}
      subheader={props.post.date}
    />
    <CardContent>
    <Typography variant="body2" color="text.secondary">
    {props.post.text}
        </Typography>
    </CardContent>
  </Card> 
        </Link>
    
}