import { useEffect, useState } from "react";
import { Button, Flex, Text, Box, Table, TextField, ScrollArea } from "@radix-ui/themes";
import { getAllHuntInstances } from "../../services/serviceRoutes/huntInstanceServices";
import "./browseHunts.css";
import HuntInstanceEntry from "../../components/HuntInstanceEntry/HuntInstanceEntry";

const BrowseHunts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await getAllHuntInstances();
        if (response.status === 200) {
          // console.log(response.data);
          setResults(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchResponse();
  }, []);

  const handleSearch = () => {
    // Dummy data for illustration
    const dummyResults = [
      "Hunt 1: Find the hidden treasure in the park.",
      "Hunt 2: Solve the mystery at the old library.",
      "Hunt 3: Discover secrets in the downtown area.",
    ];

    setResults(
      dummyResults.filter((hunt) =>
        hunt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <Flex
      className="browse-hunts-container"
      direction="column"
      gap="20px"
      align="center"
      height="100%"
      width="100%"
      m="0"
      p="80px 20px 40px"
    >
      <Text
        as="h1"
        size="6"
        weight="bold"
        variant="soft"
      >
        Browse Hunts
      </Text>
      <Flex
        direction="row"
        className="search-container"
        width="100%"
        justify="center"
      >
        <TextField.Root
          placeholder="Search for hunts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            flex: "1",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "2.5em"
          }}
        >
        <TextField.Slot />
        </TextField.Root>
        <Button
          onClick={handleSearch}
          variant="soft"
          size="medium"
        >
          Search
        </Button>
      </Flex>
        <Flex width="100%" className="row">
          <Flex width="50%" justify="center">
            <Text align="center">Hunts</Text>
          </Flex>
          <Flex width="50%" justify="center">
            <Text align="center">Date</Text>
          </Flex>
        </Flex>
      <ScrollArea type="always" scrollbars="vertical" style={{width: "100%", flexGrow: 1}}>
        <Flex direction="column">
          <HuntInstanceEntry
                results={results}
                byHuntId={false}
                setResults={setResults}
          />
        </Flex>
      </ScrollArea>
    </Flex>
  );
};

export default BrowseHunts;
