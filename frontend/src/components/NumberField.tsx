import { NumberInput, NumberInputField, Text } from "@chakra-ui/react";

import { useUserContext } from "../providers/UserProvider";

const NumberField = () => {
  const { maxRoll, setMaxRoll } = useUserContext();

  return (
    <>
      <Text mt={8}> pick a number from 10-1000</Text>
      <NumberInput
        onChange={(value: string) => setMaxRoll(Number(value))}
        defaultValue={15}
        value={maxRoll}
        min={10}
        max={1000}
      >
        <NumberInputField />
      </NumberInput>
    </>
  );
};

export default NumberField;
