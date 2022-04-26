import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  //defining the field-value pairs:
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  //if we only have one condition, we don't need curly braces
  age: Number,
});

//using the model method to declare model
export default model("User", userSchema);

