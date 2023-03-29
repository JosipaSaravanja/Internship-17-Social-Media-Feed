import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Search = () => {
  const [params, setParams] = useState();
  const navigate = useNavigate();
  const { postId } = useParams();
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  useEffect(() => {
    if (!firstUpdate.current) {
      if (params) {
        navigate("/?search=" + params);
      } else if (postId) {
        navigate("/" + postId);
      } else {
        navigate("/");
      }
    }
  }, [params]);

  return (
    <input onChange={(e) => setParams(e.target.value)} placeholder="Search" />
  );
};
