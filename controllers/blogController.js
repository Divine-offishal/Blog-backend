const Blog = require("../models/blogModel");

exports.getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();

    res.json({ message: "Fetch successful", data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, subTitle, body, image, authorId, comments } = req.body;

    const blog = new Blog({
      title,
      subTitle,
      body,
      image: image || null,
      authorId,
      comments,
    });

    const data = await blog.save();

    res.status(200).json({ message: "Data saved successfully", data: data})
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Bligs.findById(req.params.id)
    if (!blog) {
      res.status(400).json({message:  "Blog not found"})
    }

    res.status(200).json({message: "Data fetched successfully", data: blog})
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

exports.updateBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!blog) return res.status(400).json({ message: "Blog not found"})

    res.status(200).json({message: "Data Updated successfully", data: blog})
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

exports.deleteBlogById = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id)

    if (!deletedBlog) return res.status(400).json({message: "Blog not found"})
    
    res.status(200).json({ message: "Blog deleted successfully"})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
