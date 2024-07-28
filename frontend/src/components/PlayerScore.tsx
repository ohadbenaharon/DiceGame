import { Container, Text } from "@chakra-ui/react";
import WinnerContainer from "./WinnerContainer";
import PlayerHeader from "./PlayerHeader";
import PlayerCurrentScore from "./PlayerCurrentScore";

interface PlayerScoreProps {
  currentScore: number;
  playerNumber: number;
  win: boolean;
  currentTurn: boolean;
  score: number;
  winRate: number;
}

const PlayerScore = ({
  currentScore,
  playerNumber,
  win,
  currentTurn,
  score,
  winRate,
}: PlayerScoreProps) => {
  return (
    <Container centerContent>
      <PlayerHeader
        currentTurn={currentTurn}
        winRate={winRate}
        playerNumber={playerNumber}
      />
      <Text fontSize="4xl">{score}</Text>
      <WinnerContainer win={win} />
      <PlayerCurrentScore currentScore={currentScore} win={win} />
    </Container>
  );
};

export default PlayerScore;
