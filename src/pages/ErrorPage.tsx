import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>Opps..</Heading>

        {isRouteErrorResponse(error) ? (
          <Text>This page doesn't exist</Text>
        ) : (
          <Text>Sorry unexpected error</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
