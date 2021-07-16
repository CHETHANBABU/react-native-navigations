export const Dictionary = {
    email: {
        presence: {
            allowEmpty: false,
            message: "^This is required"
        },
        length: {
            minimum: 6,
            message: "^Email must be at least 6 characters long"
        },
        email: {
            message: "^Email address must be valid"
        }
    },

    generic: {
        presence: {
            allowEmpty: false,
            message: "^This is required"
        }
    },

    password: {
        presence: {
            allowEmpty: false,
            message: "^This is required"
        },
        length: {
            minimum: 6,
            message: "^Password must be at least 6 characters long"
        }
    },
}  