import Header from "../../molecules/Header";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./styles";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
}
