import { Link } from "react-router-dom";
import { ROUTES } from "../../../providers/Router/routes";

export default function Navigation() {
  return (
    <nav>
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
