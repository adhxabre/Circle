import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Register() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(!isLoading);
    return alert("Test");
  }

  React.useEffect(() => {
    document.title = "Circle | Register";
  }, []);

  return (
    <React.Fragment>
      <Flex w="100vw" h="100vh" bg="#1d1d1d" justifyContent="center" p="10rem">
        <Box w="30%" h="100%">
          <Text
            fontFamily="Nunito Sans"
            fontSize="5xl"
            fontWeight="800"
            color="#05a41e"
          >
            circle
          </Text>
          <Text
            fontFamily="Nunito Sans"
            fontSize="3xl"
            fontWeight="700"
            color="white"
          >
            Create your Account
          </Text>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <VStack py="5">
              <FormControl isRequired>
                <Input
                  border="1px"
                  borderColor="#444445"
                  color="white"
                  name="fullname"
                  placeholder="Full Name"
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  border="1px"
                  borderColor="#444445"
                  color="white"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    border="1px"
                    borderColor="#444445"
                    color="white"
                    name="password"
                    placeholder="Password"
                    type={show ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      bg="none"
                      h="1.75rem"
                      size="sm"
                      variant="solid"
                      color="white"
                      _hover={{ bg: "none" }}
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <Button
                  type="submit"
                  borderRadius="full"
                  w="100%"
                  bg="#05a41e"
                  color="white"
                  isLoading={isLoading ? true : false}
                >
                  Create
                </Button>
              </FormControl>
            </VStack>
          </form>
          <Text color="white" fontFamily="Nunito Sans">
            Already have an account?{" "}
            <span style={{ color: "#05a41e", fontWeight: 600 }}>
              <Link to="/login">Login</Link>
            </span>
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
