import React from "react";
import { Box, Flex, Icon, Link as ChakraLink, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

import INavItem from "../../../types/navItem.interface";

interface Props {
  navItem: INavItem;
}

const DesktopSubNav: React.FC<Props> = ({ navItem }) => {
  return (
    <Link href={navItem.href}>
      <ChakraLink
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text transition={"all .3s ease"} _groupHover={{ color: "teal.400" }} fontWeight={500}>
              {navItem.label}
            </Text>
            <Text fontSize={"sm"}>{navItem.subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"teal.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </ChakraLink>
    </Link>
  );
};

export default DesktopSubNav;
