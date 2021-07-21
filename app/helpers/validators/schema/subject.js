let subjectSchema = {
    type: 'object',
    required: ['departmentId', 'name','subjectCode'],
    properties: {
        departmentId : {
            type: 'string',
            minLength: 6,
            maxLength: 6
        },
        subjectName : {
            type: 'string'
        },
        subjectCode : {
            tyrpe : 'string',
            minLength : 6,
            maxLength : 6
        }
    }
}

module.exports = subjectSchema;