let departmentSchema = {
    type: 'object',
    required: ['departmentId', 'name'],
    properties: {
        departmentId : {
            type: 'string',
            minLength: 6,
            maxLength: 6
        },
        name : {
            type: 'string'
        }
    }
}

module.exports = departmentSchema;