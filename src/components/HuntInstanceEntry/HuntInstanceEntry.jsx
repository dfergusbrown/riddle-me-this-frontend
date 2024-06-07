import React, { useEffect, useState } from "react";
import { Table, Button, Text, Flex, Box } from "@radix-ui/themes";
import { NavLink, useNavigate } from "react-router-dom";
import { getHuntInstancesByTemplate } from "../../services/serviceRoutes/huntInstanceServices";

const HuntInstanceEntry = ({ results, setResults, byHuntId, huntId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    byHuntId && fetchInstanceData();
    async function fetchInstanceData() {
      try {
        const response = await getHuntInstancesByTemplate(huntId);
        console.log(response);
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <>
      {byHuntId ? (
        <Flex width="100%" justify="end">
          <Button
            variant="surface"
            m="15px"
            onClick={() => navigate(`/launch-hunt/${huntId}`)}
          >New Instance</Button>
        </Flex>
      ) : null}
      {results.length > 0 ? (
        results.map((result, index) => {
          const dateObj = new Date(result.start_time);
          const startTime = dateObj.toLocaleString("en-US");
          return (
            <NavLink
              to={`/hunt-details/${result.id}/${result.scavenger_hunt.id}`}
              style={{ textDecoration: "none", color: "inherit"}}
              key={index}
            >
              <Flex width="100%" className="button-row" height="40px">
                <Flex width="50%" p="10px" justify="center">
                  <Text>{result.scavenger_hunt.name}</Text>
                </Flex>
                <Flex width="50%" p="10px" justify="center">
                  <Text wrap="nowrap">{startTime}</Text>
                </Flex>
              </Flex>
            </NavLink>
          );
        })
      ) : (
        <Flex width="100%">
          <Text>No Results Found</Text>
        </Flex>
      )}
    </>
  );
};

export default HuntInstanceEntry;
