import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: String,
  gender: String,
  date: String,
  reportNumber: String,
  dob: String,
  time: String,
  birthPlace: String,
  day: String,
  zodiacSign: String,
  ascendant: String,
});

export default mongoose.model("FormData", formSchema);
