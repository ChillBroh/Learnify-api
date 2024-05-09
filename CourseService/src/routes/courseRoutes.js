const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getOneCourse,
  getCoursesByUser,
  approveCourse,
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

router
  .route("/course/user")
  .get(authController.restrictTo("instructor"), getCoursesByUser);

router
  .route("/course/:id")
  .patch(authController.restrictTo("admin"), approveCourse);
module.exports = router;
