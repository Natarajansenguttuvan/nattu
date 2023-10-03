const mongoose = require('mongoose')
const { toJSON } = require('./plugins');

const QuestionSchema = new mongoose.Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

QuestionSchema.plugin(toJSON);

const Questions = mongoose.model('Question', QuestionSchema);

module.exports = Questions;