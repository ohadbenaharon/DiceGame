import { Box, Text } from "@chakra-ui/react";

const ErrorDouble = ({ showError }: { showError: boolean }) => {
  return (
    <>
      {showError && (
        <Box
          mt={4}
          bg="red.500"
          color="white"
          borderRadius="md"
          textAlign={"center"}
        >
          <Text fontWeight="bold">
            You rolled double sixes!!!! Current score is zeroing and the turn
            going to the other player
          </Text>
        </Box>
      )}
    </>
  );
};

export default ErrorDouble;
