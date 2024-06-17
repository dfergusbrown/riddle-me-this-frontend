import React from "react";
import { Box, Dialog, Flex, Text, Button, TextField, Heading } from "@radix-ui/themes";

const TutorialDialog = () => {
  return (
    <Box className="tutorial-link">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button radius="full">?</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Instructions</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Here's the shortest route to starting a game?
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <Text>
                <h4>Join a Hunt</h4>
                <ol>
                    <li>Make an account</li>
                    <li>Browse through the existing upcoming games</li>
                    <li>Join a game!</li>
                    <li>Has the game started? Solve clues by figuring out the answer and taking a picture of whatever it may be</li>
                    <li>Hit submit to check your answer</li>
                </ol>
            </Text>
            <Text>
                <p>OR</p>
                <h4>Create a Hunt</h4>
                <ol>
                    <li>Make an account</li>
                    <li>Go to the Create Page</li>
                    <li>"Create New Hunt"  - Design your own!</li>
                    <li>Invite your friends, co-workers, frenemies, etc to join</li>
                </ol>
            </Text>

          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
};

export default TutorialDialog;
