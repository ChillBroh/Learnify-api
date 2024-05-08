const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getOneCourse,
} = require("../controllers/courseController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(authController.restrictTo("instructor"), createCourse)
  .get(getAllCourses);

router
  .route("/:id")
  .patch(authController.restrictTo("instructor"), updateCourse)
  .delete(authController.restrictTo("instructor"), deleteCourse)
  .get(getOneCourse);

module.exports = router;
