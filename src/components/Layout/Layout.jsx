import Head from "next/head";
import Container from "@material-ui/core/Container";
import Nav from "../Nav/Nav";

const Layout = ({ title, children }) => {
  return (
    <>
      <Nav />
      <Head>
        <title>{title}</title>
      </Head>
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  );
};
export default Layout;
