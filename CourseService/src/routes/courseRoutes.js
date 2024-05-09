const express = require("express");
const router = express.Router();
const {
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByUser,
} = require("../controllers/courseController");
const authController = require("../controllers/authController");

router.route("/").post(authController.restrictTo("instructor"), createCourse);

router
  .route("/:id")
  .patch(authController.restrictTo("instructor"), updateCourse)
  .delete(authController.restrictTo("instructor"), deleteCourse);

router
  .route("/course/user")
  .get(authController.restrictTo("instructor"), getCoursesByUser);

module.exports = router;
