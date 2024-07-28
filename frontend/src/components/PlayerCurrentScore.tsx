import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

interface PlayerCurrentScoreProps {
  currentScore: number;
  win: boolean;
}

const PlayerCurrentScore = ({ currentScore, win }: PlayerCurrentScoreProps) => {
  return (
    <Card mt={win ? "40%" : "40%"} align="center" size={"sm"} w={200}>
      <CardHeader>
        <Heading size="md"> CURRENT</Heading>
      </CardHeader>
      <CardBody>
        <Text>{currentScore}</Text>
      </CardBody>
    </Card>
  );
};

export default PlayerCurrentScore;
