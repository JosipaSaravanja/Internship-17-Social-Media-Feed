import * as React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Post = (props) => {
  const { postId } = useParams();
  const width = props.isComment ? "720px" : "750px";
  return (
    <Link
      to={postId ? "" : "/" + props.post.id}
      className={postId ? "cursor" : ""}
    >
      <Card sx={{ width: { width }, m: 1.5 }}>
        <CardHeader
          avatar={<Avatar src={props.user.img} />}
          title={props.user.username}
          subheader={props.post.date.split("-").map((el) => el + ". ")}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.post.text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
