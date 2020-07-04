import connectToDB from "../database/db";
import Model from "../database/models/FAQ";
import Layout from "../src/components/Layout/Layout";

export default function ({ faq }) {
  return (
    <Layout title="FAQ">
      {faq.map((f) => (
        <div key={f._id}>
          {f.question} | {f.answer}
        </div>
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
