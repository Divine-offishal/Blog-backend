const mongoose = require("mongoose");



const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  commentBody: {
    type: String,
    required: true,
  },
});

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  blogId: {
    type: mongoose.Types.ObjectId,
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: "Author",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  comments: [commentSchema],
});

module.exports = mongoose.model("Blog", blogSchema);
