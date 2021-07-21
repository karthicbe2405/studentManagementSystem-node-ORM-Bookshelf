let studentSchema = {
    type: 'object',
    required: ['departmentId', 'name','registerNumber'],
    properties: {
        departmentId : {
            type: 'string',
            minLength: 6,
            maxLength: 6
        },
        name : {
            type: 'string'
        },
        registrationNumber : {
            tyrpe : 'string',
            minLength : 12,
            maxLength : 12
        }
    }
}

module.exports = studentSchema;