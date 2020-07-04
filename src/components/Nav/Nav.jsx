import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const Nav = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h4">
          <Link href="/" passHref>
            <MuiLink underline="none" color="inherit">
              Car Trader App
            </MuiLink>
          </Link>
        </Typography>
        <Typography variant="subtitle1">
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
