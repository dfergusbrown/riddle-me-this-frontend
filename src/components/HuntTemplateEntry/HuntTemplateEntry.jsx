import React from "react";
import {
  Text,
  Table,
  Button,
  Flex,
  ScrollArea,
  Heading,
} from "@radix-ui/themes";
import { useState } from "react";
import HuntInstanceEntry from "../HuntInstanceEntry/HuntInstanceEntry";
import { NavLink } from "react-router-dom";
import "./huntTemplateEntry.css"

const HuntTemplateEntry = (props) => {
  const { hunts } = props;
  const [expandedRows, setExpandedRows] = useState([]);
  const [results, setResults] = useState({});

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      const revisedRows = expandedRows.filter((item) => {
        return item !== index;
      });
      setExpandedRows(revisedRows);
    } else {
      setExpandedRows([index]);
    }
  };

  return (
    <>
      <Flex width="100%" justify="center">
        <Heading as="h1">Hunt Template</Heading>
      </Flex>
      <Flex width="100%" p="15px 0px 5px">
        <Flex width="50%" justify="center"><Text>Name</Text></Flex>
        <Flex width="50%" justify="center"><Text>Location</Text></Flex>
      </Flex>
      <Flex flexGrow={1} overflow="hidden" direction="column">
        <ScrollArea
          scrollbars="vertical"
          style={{maxWidth: "100%", height: "100%"}}
        >
          {hunts.length > 0 ? (
            hunts.map((hunt, index) => (
              <React.Fragment key={index}>
                <NavLink
                  onClick={() => toggleRow(index)}
                  style={{ textDecoration: "none", color: "inherit", width: "100%" }}
                >
                  <Flex width="100vw" p="5px 15px" className="template-row">
                    <Flex width="50%" overflow="hidden" style={{ textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                      <Text width="100%">{hunt.name}</Text>
                    </Flex>
                    <Flex width="50%" overflow="hidden" style={{ textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                      <Text style={{ textAlign: "center" }}>
                        {hunt.location}
                      </Text>
                    </Flex>
                  </Flex>
                </NavLink>
                {expandedRows.includes(index) && (
                  <HuntInstanceEntry
                    results={results}
                    setResults={setResults}
                    byHuntId={true}
                    huntId={hunt.id}
                  />
                )}
              </React.Fragment>
            ))
          ) : (
            <Flex width="100%" align="center">
              <Text size="4" color="gray">
                No scavenger hunts created.
              </Text>
            </Flex>
          )}
        </ScrollArea>
      </Flex>
    </>
  );
};

export default HuntTemplateEntry;
