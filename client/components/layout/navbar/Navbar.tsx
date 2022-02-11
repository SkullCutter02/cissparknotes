import React, { useMemo } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import getSubjectsWithSections from "../../../queries/getSubjectsWithSections";
import IResponse from "../../../types/response.interface";
import IResponseData from "../../../types/responseData.interface";
import ISubject from "../../../types/subject.interface";

type Data = IResponse<IResponseData<ISubject>[]>;

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { data } = useQuery<Data>("subjects-nav", () => getSubjectsWithSections());

  const navItems = useMemo(() => {
    return data.data.map((subjectsData) => {
      return {
        label: subjectsData.attributes.name,
        href: `/${subjectsData.id}`,
        children: subjectsData.attributes.sections.data.map((sectionData) => {
          return {
            label: sectionData.attributes.name,
            href: `/${subjectsData.id}/${sectionData.id}`,
          };
        }),
      };
    });
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href={"/"}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              cursor={"pointer"}
            >
              火花筆記
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
};

export default Navbar;

//
// const navItems: Array<INavItem> = [
//   {
//     label: "Inspiration",
//     children: [
//       {
//         label: "Explore Design Work",
//         subLabel: "Trending Design to inspire you",
//         href: "#",
//       },
//       {
//         label: "New & Noteworthy",
//         subLabel: "Up-and-coming Designers",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Find Work",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Learn Design",
//     href: "#",
//   },
//   {
//     label: "Hire Designers",
//     href: "#",
//   },
// ];
