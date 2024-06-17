import { useRef } from "react";
import "./landingPage.css";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import LoginDialog from "../../components/LoginDialog/LoginDialog";
import Logo from "../../components/Logo/Logo";
import TutorialDialog from "./TutorialDialog"

const LandingPage = () => {
  const loginDialogRef = useRef(null);

  return (
    <div className="page">
      <div>
        <Logo
          src="/extracted-logo.png"
          newClassName="landing-logo"
          alt="magnifying glass logo"
        />
        <Flex justify="center">
          <Text size="7" color="yellow" className="logo-text" style={{margin: "-30px 0px 20px"}}>Riddle-Me-This</Text>
        </Flex>
      </div>
      <Flex display="flex" direction="column" gap="20px">
        <Button variant="surface" asChild>
          <NavLink to="/browse">Browse</NavLink>
        </Button>
        <LoginDialog ref={loginDialogRef} buttonName="Login" />
      </Flex>
      <TutorialDialog />
    </div>
  );
};

export default LandingPage;
