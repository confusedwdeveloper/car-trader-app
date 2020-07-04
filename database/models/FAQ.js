import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FAQSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

let FAQ;
try {
  FAQ = mongoose.model("faq", FAQSchema);
} catch (error) {
  FAQ = mongoose.model("faq");
}
export default FAQ;
