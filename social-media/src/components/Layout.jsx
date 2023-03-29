import { Outlet } from "react-router-dom";
import { Search } from "./Search";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/" style={{ margin: "0 50px" }}>
          <button>
            Feed
            <br />
            Page
          </button>{" "}
        </Link>
        <h1>Some social media page</h1>

        <Search />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
