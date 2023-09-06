import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  React.useEffect(() => {
    document.title = "Circle | Home";
  }, []);

  return (
    <React.Fragment>
      <Flex w="100%" h="100%" bg="blackAlpha.900"></Flex>
    </React.Fragment>
  );
}
