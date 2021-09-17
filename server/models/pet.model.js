const mongoose = require("mongoose");

// {PATH} will be replaced with the field name, such as "location".
const petschema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: [true, "{PATH} is already existed."],
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        type: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        description: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        skill1: {
            type: String,
        },

        skill2: {
            type: String,
        },

        skill3: {
            type: String,
        },
        likeCount: {
            type: Number,
            default: 0,
        }

        // src URL for an <img> or <iframe>
        // **********&**

    },
    { timestamps: true } // adds createdAt and updatedAt
);

/*
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Pet = mongoose.model("Pet", petschema);

// The mongoose model that lets you connect to it's DB collection.
module.exports = Pet;