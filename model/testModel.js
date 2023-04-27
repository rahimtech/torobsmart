import { model, Schema, models } from "mongoose";

export const testSchema = new Schema({
  name: String,
});

const Test = models.Test || model("Test", testSchema);

export default Test;
