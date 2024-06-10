import { useRef } from "react";
import "./landingPage.css";
import { Button, Flex } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import LoginDialog from "../../components/LoginDialog/LoginDialog";
import Logo from "../../components/Logo/Logo";

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
      </div>
      <Flex display="flex" direction="column" gap="20px">
        <Button variant="surface" asChild>
          <NavLink to="/browse">Browse</NavLink>
        </Button>
        <LoginDialog ref={loginDialogRef} buttonName="Login" />
      </Flex>
    </div>
  );
};

export default LandingPage;
