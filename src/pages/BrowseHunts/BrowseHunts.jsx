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
        color="indigo"
        variant="soft"
        flexShrink="0"
        highContrast
      >
        Browse Hunts
      </Text>
      <Flex
        direction="row"
        className="search-container"
        width="100%"
        justify="center"
        flexShrink="0"
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
          color="indigo"
          variant="soft"
          size="medium"
        >
          Search
        </Button>
      </Flex>
      <ScrollArea type="always" scrollbars="vertical" style={{width: "100%", flexGrow: 1}}>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="table-header-hunts">
                Hunts
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="table-header-date">
                Date
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <HuntInstanceEntry
              results={results}
              byHuntId={false}
              setResults={setResults}
            />
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Flex>
  );
};

export default BrowseHunts;
