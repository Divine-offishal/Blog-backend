const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  profileImage: {
    data: Buffer,
    contentType: String,
  },
  bio: String,
  authorId: {
    type: mongoose.Types.ObjectId,
  },
});

module.exports = mongoose.model('Author', authorSchema)