const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false

    },
    lastName: {
        type: String,
        required: false
    },
    nationalIdNumber: { // Use a more descriptive name (e.g., nationalIdentificationNumber)
        type: String,
        unique: true // Ensure unique national ID for each student (if applicable)
    },
    regNumber: { // Use a more descriptive name (e.g., nationalIdentificationNumber)
        type: String,
        unique: true // Ensure unique national ID for each student (if applicable)
    },

    emailAddress: { // Consider using a more common term (e.g., email)
        type: String,
        unique: true // Ensure unique email for each student
    },
    contact1: {
        type: String,
        default: null,

    },
    contact2: {
        type: String,
        default: null,

    },
    address: {
        type: String,
        default: null,
    },
    // Medical  default: null, Information
    doctorName: {
        type: String,
        default: null,
    },
    doctorEmail: {
        type: String
        , default: null,
    },
    doctorContact1: {
        type: String
        , default: null,
    },
    doctorContact2: {
        type: String
        , default: null,
    },
    allergies: {
        type: String
        , default: null,
    },
    doctorPlaceOfWork: {
        type: String
        , default: null,
    },
    dietRestrictions: {
        type: String,
        default: null

    },
    // Guardians Information
    guardian1: {

        name: {
            type: String,
            default: null
        },
        email: {
            type: String, default: null
        },
        contact1: {
            type: String,
            default: null

        },
        contact2: {
            type: String
            , default: null
        },
        emergencyContact: {
            type: String, default: null
        }


    },
    guardian2: {
        name: {
            type: String,
            default: null,

        },
        email: {
            type: String, default: null
        },
        contact1: {
            type: String,
            default: null,
        },
        contact2: {
            type: String
            , default: null
        },
        emergencyContact: {
            type: String,
            default: null,
        }
    }
});
export const studentsModel =
    mongoose.models.students || mongoose.model('students', studentSchema);