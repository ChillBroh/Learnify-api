const Enrollment = require("../models/enrollmentModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

// Create a new enrollment
const createEnrollment = catchAsync(async (req, res, next) => {
  const { courseId } = req.body;
  const learnerId = req.user.userId;

  const existingEnrollment = await Enrollment.findOne({ courseId, learnerId });
  if (existingEnrollment) {
    return next(new AppError("Already enrolled!", 400));
  }

  const newEnrollment = new Enrollment({
    courseId,
    learnerId,
  });

  const savedEnrollment = await newEnrollment.save();
  res.status(201).json({
    data: savedEnrollment,
    message: "Enrolled",
  });
});

// Get all enrollments
const getAllEnrollments = catchAsync(async (req, res, next) => {
  const enrollments = await Enrollment.find();
  res.status(200).json({
    data: enrollments,
  });
});

// Get a single enrollment by ID
const getEnrollmentById = catchAsync(async (req, res, next) => {
  const enrollment = await Enrollment.find({ learnerId: req.params.id });
  if (!enrollment) {
    return next(new AppError("Enrollment not found", 404));
  }
  res.status(200).json({
    data: enrollment,
  });
});

// Update an enrollment by ID
const updateEnrollmentById = catchAsync(async (req, res, next) => {
  const userId = req.user.userId;
  const courseId = req.params.id;
  const enrollment = await Enrollment.findOne({
    courseId: courseId,
    learnerId: userId,
  });
  console.log(enrollment);
  const updatedEnrollment = await Enrollment.findByIdAndUpdate(
    enrollment._id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedEnrollment) {
    return next(new AppError("Enrollment not found", 404));
  }
  res.status(200).json({
    data: updatedEnrollment,
    message: "Enrollment updated successfully",
  });
});
// Delete an enrollment by ID
const deleteEnrollmentById = catchAsync(async (req, res, next) => {
  const userId = req.user.userId;
  const courseId = req.params.id;
  const enrollment = await Enrollment.findOne({
    courseId: courseId,
    learnerId: userId,
  });
  console.log(enrollment);
  const deletedEnrollment = await Enrollment.findByIdAndDelete(enrollment._id);
  if (!deletedEnrollment) {
    return next(new AppError("Enrollment not found", 404));
  }
  res.status(204).json({
    data: null,
    message: "Enrollment deleted successfully",
  });
});
// Export the controller functions
module.exports = {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollmentById,
  deleteEnrollmentById,
};
