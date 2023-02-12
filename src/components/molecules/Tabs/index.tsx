import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "../../../components/atoms/NavLink";
import Typography from "../../../components/atoms/Typography";
import {
  TabsList,
  TabsListItem,
  TabsListItemIndicator,
  TabsWrapper,
} from "./styles";
import { TabsProps } from "./types";

export default function Tabs({ items = [] }: TabsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState({ left: 0, width: 0 });
  const { pathname } = useLocation();

  useEffect(() => {
    if (wrapperRef.current) {
      const activeLinks = wrapperRef.current.getElementsByClassName("active");
      if (activeLinks.length > 0) {
        const wrapperBoundings = wrapperRef.current.getBoundingClientRect();
        const activeLinkBoundings = activeLinks[0].getBoundingClientRect();
        setPositions({
          left: activeLinkBoundings.left - wrapperBoundings.x,
          width: activeLinkBoundings.width,
        });
      }
    }
  }, [pathname]);

  return (
    <TabsWrapper ref={wrapperRef}>
      <TabsList>
        {items.map(({ to, label }) => (
          <TabsListItem>
            <Typography size="m" color="secondary">
              <NavLink to={to}>{label}</NavLink>
            </Typography>
          </TabsListItem>
        ))}
      </TabsList>
      <TabsListItemIndicator leftPos={positions.left} width={positions.width} />
    </TabsWrapper>
  );
}
