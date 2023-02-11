import { Fragment } from "react";
import ThemeManagerProvider from "./contexts/theme";
import Router from "./providers/Router";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeManagerProvider>
        <Router />
      </ThemeManagerProvider>
    </Fragment>
  );
}
