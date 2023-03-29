import {Layout} from "./Layout" 
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
        <Route index/>
        <Route path=":postId"/>
        <Route path="NotAvailable"/>
      </Route>
    </>
  )
);
export const Router=()=> {
  return <RouterProvider router={router} />;
}
