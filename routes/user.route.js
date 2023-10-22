const express = require("express");
const router = express.Router();
const { TestUser, TestUserPost } = require("../controller/user.controller");
const {
  printSuccess,
  printSuccessRoute,
  CheckPost,
} = require("../middleware/middleware");

router.use(printSuccess);
router.get("/", printSuccessRoute, TestUser);
router.post("/", CheckPost, TestUserPost);

module.exports = router;
