const Author = require("../models/authorModel");

exports.createAuthor = async (req, res) => {
  try {
    const { authorName, profileImage, bio } = req.body;

    const newAuthor = new Author({
      authorName,
      profileImage,
      bio,
    });

    const data = await newAuthor.save();
    res.status(201).json({message: 'Author saved successfully', data: data});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
