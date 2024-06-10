import React from "react";
import { Button, Flex, ScrollArea, Table, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";

const ProfileInstancesList = ({ participations }) => {
  return (
    <Flex m="4" direction="column">
      <Flex>
        <Flex width="33%" justify="center">
          Name
        </Flex>
        <Flex width="33%" justify="center">
          Location
        </Flex>
        <Flex width="33%" justify="center">
          Date
        </Flex>
      </Flex>
      <Flex direction="column" style={{}}>
        {/* <ScrollArea> */}
          {!participations.length ? (
            <Flex width="100%" justify="center">
              <Text>No records to Show</Text>
            </Flex>
          ) : (
            participations.map((game, idx) => {
              const dateObj = new Date(game.hunt_instance.end_time);
              const endTime = dateObj.toLocaleString("en-US");

              return (
                <NavLink
                  to={`/hunt-details/${game.hunt_instance.id}/${game.hunt_instance.scavenger_hunt.id}`}
                  className="participation-row"
                  style={{ textDecoration: "none", color: "lightgray" }}
                >
                  <Flex width="100%" key={idx}>
                    <Flex width="33%">
                      {game.hunt_instance.scavenger_hunt.name}
                    </Flex>
                    <Flex width="33%" justify="center">
                      {game.hunt_instance.scavenger_hunt.location}
                    </Flex>
                    <Flex width="33%">{endTime}</Flex>
                  </Flex>
                </NavLink>
              );
            })
          )}
        {/* </ScrollArea> */}
      </Flex>
    </Flex>
  );
};

export default ProfileInstancesList;
