import { Outlet } from "react-router-dom";

import { useStylesLayout } from "./layout.theme";
import Header from "../header/Header";

const Layout = () => {
  const classes = useStylesLayout();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
