const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController{
    getAll(req, res){
        Pet.find().sort("type").exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    create(req, res){
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({status: "Creation Succesful"}))
            .catch ( err => res.json(err));
    }
    getOne(req, res){
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    update(req, res) {

        Pet.findByIdAndUpdate(
            
            {_id: req.params._id},
            req.body,
            {runValidators: true , context: 'query'}
        )
            .then(() => {
                res.json({status: "ok"})
            })
            .catch(err => res.json(err));
            
    }

    Delete(req, res) {
        Pet.findOneAndDelete({_id: req.params._id}, req.body)
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }  

}

module.exports = new PetController();

