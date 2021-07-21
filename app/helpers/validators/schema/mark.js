let markSchema = {
    type: 'object',
    required: ['registrationNumber', 'mark','subjectCode'],
    properties: {
        registrationNumber : {
            type: 'string',
            minLength: 12,
            maxLength: 12
        },
        mark : {
            type: 'number',
            minLength : 1,
            maxLength : 3,
            minValue : 0,
            maxValue : 100
        },
        subjectCode : {
            tyrpe : 'string',
            minLength : 6,
            maxLength : 6
        }
    }
}

module.exports = markSchema;