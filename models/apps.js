const mongoose = require('mongoose') //va a almacenar los datos

const appsSchema = new mongoose.Schema ({
        type:{type:String,require:true},
        name:{type:String,require:true},
        description: {type:String,require:true},
        time:{type:String,require:true},     
        image:{type:String,require:true},
        price: {type:Number,require:true},
        functions:{type:Array,require:true},   
       
    })
const Apps = mongoose.model("apps", appsSchema)

module.exports = Apps;