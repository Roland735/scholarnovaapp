import mongoose from "mongoose";

const { Schema } = mongoose;

const anomalySchema = new Schema({
    student_id: { type: Schema.Types.ObjectId, ref: 'Student' },
    mark: { type: Number, required: true },
});

const examSchema = new Schema({
    exam_id: { type: String, required: true },
    highest_mark: { type: Number, required: true },
    lowest_mark: { type: Number, required: true },
    highest_student: { type: Schema.Types.ObjectId, ref: 'Student' },
    subject: { type: String, required: true },
    class: { type: String, required: true },
    average_mark: { type: Number, required: true },
    link_to_resource: { type: String, required: true },
    exam_median: { type: Number, required: true },
    exam_time: { type: Date, required: true },
    exam_invigilator: { type: String, required: true },
    standard_deviation: { type: Number, required: true },
    anomalies: {
        positive: [anomalySchema],
        negative: [anomalySchema],
    },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
