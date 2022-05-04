const mongoose = require('mongoose') //va a almacenar los datos

const smediaSchema = new mongoose.Schema ({
        name:{type:String,require:true},
        description:{type:String,require:true},
        image: {type:String,require:true},
        functions:{type:Array,require:true},  
    })
const Smedia = mongoose.model("smedias", smediaSchema)

module.exports = Smedia;