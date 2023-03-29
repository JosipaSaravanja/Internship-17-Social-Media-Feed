import {Layout} from "./Layout";
import {FeedPage} from "../pages/FeedPage/FeedPage"
import {PostPage} from "../pages/PostPage/PostPage"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route index element={<FeedPage/>} />
        <Route path=":postId" element={<PostPage/>} />
        <Route path="missing"/>
      </Route>
    </>
  )
);
export const Router=()=> {
  return <RouterProvider router={router} />;
}
