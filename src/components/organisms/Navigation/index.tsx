import { Link } from "react-router-dom";
import { ROUTES } from "../../../providers/RouterProvider/routes";
import { navigationContainer } from "./styles.module.scss";

export default function Navigation() {
  return (
    <nav className={navigationContainer}>
      <ul>
        <li>
          <Link to={ROUTES.CONVERSION}>Conversion</Link>
        </li>
        <li>
          <Link to={ROUTES.OTHER}>Other</Link>
        </li>
      </ul>
    </nav>
  );
}
