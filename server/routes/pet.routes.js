const petController = require("../controllers/pet.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    /*
    @route("/api/pets")
    def create:
    when this URL is visited, execute the controller function.
    */
    app.post("/api/pets", petController.create);
    app.get("/api/pets", petController.getAll);
    app.get("/api/pets/:id", petController.getOne);
    app.delete("/api/pets/:id", petController.delete);
    app.put("/api/pets/:id", petController.update);
    app.post("/api/pets/many", petController.createMany);
};