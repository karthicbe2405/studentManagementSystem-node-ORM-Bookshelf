let variable = {
    registerNumber : {
            type: 'object',
            required: ['registerNumber'],
            properties: {
                registerNumber : {
                    type: 'string',
                    minLength: 12,
                    maxLength: 12
                }
            }
    },
    departmentId : {
        type: 'object',
        required: ['departmentId'],
        properties: {
            departmentId : {
                type: 'string',
                minLength: 6,
                maxLength: 6
            }
        }
    }
} 
module.exports = variable;