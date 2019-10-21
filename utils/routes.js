const Pets = require("../controllers/pets");

module.exports = function(app){
    app.get("/api/pets", Pets.getAll);
    app.post("/api/pets", Pets.create);
    app.get("/api/pets/:_id", Pets.getOne);
    app.put("/api/pets/:_id/edit",Pets.update);
    app.delete("/api/pets/:_id/",Pets.Delete);
}