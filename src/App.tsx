import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformsSelector from "./components/PlatformsSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genreId: number) =>
              setGameQuery({ ...gameQuery, genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformsSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platformId: number) =>
                setGameQuery({ ...gameQuery, platformId })
              }
            />
            <SortSelector
              selectSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder: string) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
