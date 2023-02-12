import Tabs from "../../../components/molecules/Tabs";
import { ROUTES } from "../../../providers/Router/routes";
import { NavigationWrapper } from "./styles";

export default function Navigation() {
  return (
    <NavigationWrapper>
      <Tabs
        items={[
          { to: ROUTES.ROOT, label: "Conversion" },
          { to: ROUTES.OTHER, label: "Other" },
        ]}
      />
    </NavigationWrapper>
  );
}
