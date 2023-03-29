import * as React from 'react';
import {Card, CardHeader, CardContent} from '@mui/material';
import {Avatar} from '@mui/material';
import {Typography} from '@mui/material';  
import { Link } from 'react-router-dom';


export const Post=(props)=>{
    return <Link to={"/" +props.post.id}>
    <Card sx={{ width: "1000px", m: 1.5}}>
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