import Main from "../Main";
import Header from "../Header";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
