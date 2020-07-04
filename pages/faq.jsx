import connectToDB from "../database/db";
import Model from "../database/models/FAQ";
import Layout from "../src/components/Layout/Layout";
import ExpansionPanel from "../src/components/ExpansionPanel/ExpansionPanel";

export default function ({ faq }) {
  return (
    <Layout title="FAQ">
      {faq.map((f) => (
        <ExpansionPanel key={f._id} faq={f} />
      ))}
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
