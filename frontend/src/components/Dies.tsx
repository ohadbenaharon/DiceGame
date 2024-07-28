import { Card, CardBody, Container } from "@chakra-ui/react";

interface DicesProps {
  dieOne: number;
  dieTwo: number;
}
const Dies = ({ dieOne, dieTwo }: DicesProps) => {
  return (
    <Container
      justifyContent={"center"}
      flexDirection={"row"}
      display={"flex"}
      gap={3}
      centerContent
    >
      <Card alignItems={"center"} w={20}>
        <CardBody gap={2}>{dieOne}</CardBody>
      </Card>
      <Card alignItems={"center"} w={20}>
        <CardBody gap={2}>{dieTwo}</CardBody>
      </Card>
    </Container>
  );
};

export default Dies;
