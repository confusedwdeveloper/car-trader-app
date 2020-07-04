import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";

const Nav = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h3">
          <Link href="/" passHref>
            <MuiLink underline="none" color="inherit">
              Car Trader App
            </MuiLink>
          </Link>
        </Typography>
        <Typography>
          <Link href="/faq" passHref>
            <MuiLink underline="none" color="inherit">
              FAQ
            </MuiLink>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
