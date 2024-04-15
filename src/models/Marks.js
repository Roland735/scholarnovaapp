const mongoose = require('mongoose');
const { unique } = require('next/dist/build/utils');

const { Schema } = mongoose;

const examSchema = new Schema({
    exam_id: { type: String, required: true, unique: true },
    exam_mark: { type: Number, },
    exam_percentage: { type: Number, },
    exam_position: { type: Number, required: true },
    absent: { type: Boolean, default: false },
});

const assignmentSchema = new Schema({
    assignment_id: { type: String, required: true, unique: true },
    assignment_mark: { type: Number, },
    assignment_percentage: { type: Number, },
    assignment_position: { type: Number, required: true },
    absent: { type: Boolean, default: false },
});

const teacherSchema = new Schema({
    teacher_name: { type: String, required: true },
    exams_average: { type: Number, required: true },
    assignments_average: { type: Number, required: true },
});

const detentionSchema = new Schema({
    date_issued: { type: Date, required: true },
    status: { type: String, required: true },
});

const subjectSchema = new Schema({
    name: { type: String, required: true },
    current_teacher: { type: String, required: true },
    previous_teachers: [teacherSchema],
    exams: [examSchema],
    assignments: [assignmentSchema],
});

const studentSchema = new Schema({
    reg_number: { type: String, required: true, unique: true },
    grade: { type: String, required: true },
    subjects: [subjectSchema],
    attendance: {
        total_classes: { type: Number, required: true },
        attended_classes: { type: Number, required: true },
        percentage: { type: Number, required: true },
    },
    behavior_status: { type: String, required: true },
    detention_status: { type: String, required: true },
    detentions: [detentionSchema],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
