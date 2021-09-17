const Pet = require("../models/pet.model");

// Export an object that is full of methods.
module.exports = {
    // long-form syntax - key: value
    create: function (req, res) {
        console.log("create method executed");

        // req.body is the form data or data sent in from postman / js requests.
        Pet.create(req.body)
            .then((pet) => {
                // newly created dest from DB with auto generated id and createdAt.
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Shorthand method in object syntax.
    getAll(req, res) {
        console.log("getAll method executed");
        Pet.find()
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params:", req.params);

        Pet.findById(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    delete(req, res) {
        console.log("delete method executed", "url params:", req.params);

        Pet.findByIdAndDelete(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, // Run model validations again.
            new: true, // return newly updated document.
        })
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // NOT ON EXAM.
    createMany(req, res) {
        const promises = req.body.map((dest) => {
            return Pet.create(dest);
        });

        Promise.allSettled(promises).then((results) => {
            res.json(results);
        });
    },
};