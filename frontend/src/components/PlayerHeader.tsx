import { Box, Heading, Text } from "@chakra-ui/react";

interface PlayerHeaderProps {
  playerNumber: number;
  currentTurn: boolean;
  winRate: number;
}

const PlayerHeader = ({
  playerNumber,
  currentTurn,
  winRate,
}: PlayerHeaderProps) => {
  return (
    <>
      <Box display="flex" alignItems="center" mt={14}>
        <Heading>PLAYER {playerNumber}</Heading>

        {currentTurn && (
          <Box
            ml={8}
            width="15px"
            height="15px"
            borderRadius="50%"
            bg="red.500"
          />
        )}
      </Box>
      <Text mb={14}> won {winRate} time</Text>
    </>
  );
};

export default PlayerHeader;
