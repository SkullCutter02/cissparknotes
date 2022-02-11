import React from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";

import MobileNavItem from "./MobileNavItem";
import INavItem from "../../../types/navItem.interface";

interface Props {
  navItems: INavItem[];
}

const MobileNav: React.FC<Props> = ({ navItems }) => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} navItem={navItem} />
      ))}
    </Stack>
  );
};
export default MobileNav;
