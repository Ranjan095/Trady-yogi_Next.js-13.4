/** @format */

import mongoose from "mongoose";

let courseSchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  benifits: { type: [String], required: true },
});

/*** For Modal ***/
export let CourseModal =
  mongoose.models.course || mongoose.model("course", courseSchema);
