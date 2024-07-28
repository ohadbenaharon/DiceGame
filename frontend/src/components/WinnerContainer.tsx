import { Box, Text } from "@chakra-ui/react";

const WinnerContainer = ({ win }: { win: boolean }) => {
  return (
    <Box
      transform="rotate(-45deg)"
      bg="green.500"
      mt={20}
      color="white"
      p={6}
      borderRadius="md"
      boxShadow="md"
      visibility={win ? "visible" : "hidden"}
    >
      <Text fontWeight="bold" fontSize="4xl">
        Winner!
      </Text>
    </Box>
  );
};

export default WinnerContainer;
