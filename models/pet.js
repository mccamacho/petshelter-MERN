const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const PetSchema = new mongoose.Schema({

    name:{
        type: String,
        required:[true, "Pet name is required"],
        minlength: [2, "Pet name must be at least 2 characters long"],
        unique: true
    },
    type:{
        type: String,
        required:[true, "type of pet is required"],
        minlength: [3, "type of pet must be at least 3 characters long"]
    },
    description:{
        type: String,
        required:[true, "description of pet is required"],
        minlength: [3, "type of pet must be at least 3 characters long"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
}, {timestamps: true});

mongoose.model("Pet", PetSchema);
PetSchema.plugin(uniqueValidator, { message: '{PATH} is already in the database' });