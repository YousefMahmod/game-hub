import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { usePlatforms } from "../hooks/usePlatforms";
import useGameQuerySotre from "../store";

const PlatformsSelector = () => {
  const { data: platofrms, error } = usePlatforms();
  const selectedPlatformId = useGameQuerySotre((s) => s.gameQuery.platformId);
  const setSelectPlatform = useGameQuerySotre((s) => s.setSelectPlatform);

  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platofrms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
