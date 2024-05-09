const express = require("express");
const router = express.Router();
const {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollmentById,
  deleteEnrollmentById,
} = require("../controllers/enrollmentController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(authController.restrictTo("learner"), createEnrollment)
  .get(authController.restrictTo("admin", "instructor"), getAllEnrollments);
router
  .route("/:id")
  .get(getEnrollmentById)
  .patch(authController.restrictTo("learner"), updateEnrollmentById)
  .delete(authController.restrictTo("learner"), deleteEnrollmentById);
module.exports = router;