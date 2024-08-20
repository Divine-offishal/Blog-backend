const express = require("express");
const authorController = require("../controllers/authorController");
const router = express.Router();

// router.get("/blog", blogController.getAllBlogs);
router.post("/signin", authorController.createAuthor);

module.exports = router;
