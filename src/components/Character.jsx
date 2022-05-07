import { Card, Image, Text, Badge, Group, ActionIcon } from "@mantine/core";
import { GenderMale, GenderFemme, GenderGenderqueer } from "tabler-icons-react";
export default function Character({ character }) {
  const MaleGender = (
    <ActionIcon
      component={"div"}
      size="xs"
      color="blue"
      radius="xl"
      variant="transparent"
    >
      <GenderMale size={15} />
    </ActionIcon>
  );
  const FemaleGender = (
    <ActionIcon
      component={"div"}
      size="xs"
      color="pink"
      radius="xl"
      variant="transparent"
    >
      <GenderFemme size={15} />
    </ActionIcon>
  );
  const Unknown = (
    <ActionIcon
      component={"div"}
      size="xs"
      color="gray"
      radius="xl"
      variant="transparent"
    >
      <GenderGenderqueer size={15} />
    </ActionIcon>
  );
  return (
    <Card shadow="sm" p="xl">
      <Card.Section>
        <Image src={character.image} height={160} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="sm">
        {character.name}
      </Text>
      <Group position="center" spacing="xs">
        <Badge variant="outline" color="dark" size="md" mt={2}>
          {character.species}
        </Badge>
        <Badge
          mt={2}
          variant="outline"
          size="md"
          color={
            character.gender === "Male"
              ? "blue"
              : character.gender === "Female"
              ? "pink"
              : "gray"
          }
          rightSection={
            character.gender === "Male"
              ? MaleGender
              : character.gender === "Female"
              ? FemaleGender
              : Unknown
          }
        >
          {character.gender === "Male"
            ? "Male "
            : character.gender === "Female"
            ? "Female "
            : " Unknown"}
        </Badge>
        <Badge
          mt={2}
          size="md"
          variant="filled"
          color={
            character.status === "Alive"
              ? "teal"
              : character.status === "Dead"
              ? "red"
              : "gray"
          }
        >
          {character.status}
        </Badge>
      </Group>
    </Card>
  );
}
