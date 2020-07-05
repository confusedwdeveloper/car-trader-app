import connectToDB from "../database/db";
import Model from "../database/models/FAQ";
import Layout from "../src/components/Layout/Layout";
import ExpansionPanel from "../src/components/ExpansionPanel/ExpansionPanel";
import Box from "@material-ui/core/Box";

export default function ({ faq }) {
  return (
    <Layout title="FAQ">
      <Box component="article" mt={4}>
        {faq.map((f) => (
          <ExpansionPanel key={f._id} faq={f} />
        ))}
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  await connectToDB();
  let faq = await Model.find().lean();

  return {
    props: {
      faq: JSON.parse(JSON.stringify(faq)),
    },
  };
};
