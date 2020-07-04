import Layout from "../src/components/Layout/Layout";
import Link from "next/link";

export default function Index() {
  return (
    <Layout title="Car Trader App">
      <h1>Hello World</h1>
      <Link href="/faq">
        <a> To FAQ</a>
      </Link>
      <br />
      <Link href="/hello">
        <a>To Hello</a>
      </Link>
    </Layout>
  );
}
