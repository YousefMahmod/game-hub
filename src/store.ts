import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearch: (searchText: string) => void;
  setSelectGenre: (genreId: number) => void;
  setSelectPlatform: (platformId: number) => void;
  setSelectSortOrder: (sortOrder: string) => void;
}

const useGameQuerySotre = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearch: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
  setSelectGenre: (genreId: number) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, genreId } })),
  setSelectPlatform: (platformId: number) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, platformId } })),
  setSelectSortOrder: (sortOrder: string) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, sortOrder } })),
}));

export default useGameQuerySotre;
