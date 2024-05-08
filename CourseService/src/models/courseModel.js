/**
 * @description - This file defines the course model for MongoDB
 */

const mongoose = require("mongoose");

// Schema for quiz
const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

// Schema for lessons
const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
  },
  quiz: quizSchema,
});

// Schema for courses
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
    },
    lessons: [lessonSchema],
  },
  { collection: "courses" }
);

// Creating mongoose model using Schema
const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
