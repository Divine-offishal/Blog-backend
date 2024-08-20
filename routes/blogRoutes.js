const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.get("/blog", blogController.getAllBlogs);
router.get("/blog/:id", blogController.getBlogById);
router.post("/blog", blogController.createBlog);
router.patch("/blog/:id", blogController.updateBlogById);
router.delete("/blog/:id", blogController.deleteBlogById)

module.exports = router;
