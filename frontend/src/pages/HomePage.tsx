import { Grid, GridItem } from "@chakra-ui/react";
import PlayerScore from "../components/PlayerScore";
import CenterContainer from "../components/CenterContainer";
import { useUserContext } from "../providers/UserProvider";

const HomePage = () => {
  const { playerOne, playerTwo } = useUserContext();

  return (
    <>
      <Grid templateColumns="40% 20% 40%" gap={3} mt={20}>
        <GridItem h="80vh" bg="blue.500">
          <PlayerScore
            score={playerOne.score}
            currentScore={playerOne.current}
            playerNumber={1}
            currentTurn={playerOne.turn}
            win={playerOne.win}
            winRate={playerOne.winRate}
          />
        </GridItem>
        <GridItem h="80vh" bg="red.500">
          <CenterContainer />
        </GridItem>

        <GridItem h="80vh" bg="blue.500">
          <PlayerScore
            score={playerTwo.score}
            currentScore={playerTwo.current}
            playerNumber={2}
            currentTurn={playerTwo.turn}
            win={playerTwo.win}
            winRate={playerTwo.winRate}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
