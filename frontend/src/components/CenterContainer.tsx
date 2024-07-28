import { Button, Container } from "@chakra-ui/react";
import Dies from "./Dies";
import { useState } from "react";
import { rollDice } from "../utils/rollDices";
import { useUserContext } from "../providers/UserProvider";
import ErrorDouble from "./ErrorDouble";
import NumberField from "./NumberField";

const CenterContainer = () => {
  const [dice, setDice] = useState<Dice>({ dieOne: 0, dieTwo: 0 });
  const [showError, setShowError] = useState<boolean>(false);

  const {
    resetGame,
    setCurrentScore,
    setDoubleSix,
    setHold,
    playerOne,
    playerTwo,
  } = useUserContext();

  const onClickRollDice = () => {
    const dice = rollDice();
    setDice({ dieOne: dice.dieOne, dieTwo: dice.dieTwo });
    if (dice.dieOne === 6 && dice.dieTwo === 6) {
      setShowError(true);
      setDoubleSix();

      setTimeout(() => {
        setShowError(false);
      }, 1000);
      return;
    }
    setCurrentScore(dice.dieOne + dice.dieTwo);
  };

  return (
    <Container centerContent>
      <Button
        mt={14}
        mb={"70%"}
        colorScheme="teal"
        size="md"
        onClick={resetGame}
      >
        New Game
      </Button>
      <Dies dieOne={dice.dieOne} dieTwo={dice.dieTwo} />
      <Button
        colorScheme="red"
        size="lg"
        onClick={onClickRollDice}
        isDisabled={playerOne.win || playerTwo.win}
      >
        Roll the Dice 🎲 🎲
      </Button>

      <ErrorDouble showError={showError} />

      <Button
        mt={"80%"}
        colorScheme="teal"
        size="lg"
        onClick={setHold}
        isDisabled={playerOne.win || playerTwo.win}
      >
        Hold
      </Button>

      <NumberField />
    </Container>
  );
};

export default CenterContainer;
