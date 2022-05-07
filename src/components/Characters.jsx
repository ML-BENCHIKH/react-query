import { useQuery } from "react-query";
import { ArrowRight, ArrowLeft } from "tabler-icons-react";
import {
  Group,
  Text,
  SimpleGrid,
  Container,
  Loader,
  Center,
  Button,
} from "@mantine/core";
import Character from "./Character";
import { useState } from "react";
const Characters = () => {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return await response.json();
  };

  const { data, isLoading, isError, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return (
      <Center style={{ width: "100vw", height: "100vh" }}>
        <Loader color="cyan" variant="bars" />
      </Center>
    );
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Container px="md" py="md">
      <Text
        size="xl"
        weight={900}
        align="center"
        mb={3}
        p={5}
        color="cyan"
        transform="uppercase"
      >
        Ricky & Morty Characters
      </Text>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 2, spacing: "sm" },
        ]}
      >
        {data.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </SimpleGrid>
      <Group position="center">
        <Button
          color="indigo"
          leftIcon={<ArrowLeft size={24} strokeWidth={3} color={"white"} />}
          onClick={() => {
            setPage((old) => old - 1);
          }}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          color="indigo"
          rightIcon={<ArrowRight size={24} strokeWidth={3} color={"white"} />}
          onClick={() => {
            setPage((old) => old + 1);
          }}
          disabled={isPreviousData && !data.info.next}
        >
          Next
        </Button>
      </Group>
    </Container>
  );
};

export default Characters;
