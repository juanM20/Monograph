import mongoose from "mongoose";

const monograph_schema = mongoose.Schema({

    code : {type: Number, require: true},
    name : {type: String, require: true},
    category : {type: String, require: true}
})

const monographBD = mongoose.model('monographBD', monograph_schema)

export default monographBD
