import { To } from "react-router-dom";

interface TabsItem {
  to: To;
  label: string;
}

export interface TabsProps {
  items: TabsItem[];
}
