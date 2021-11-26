const mongoose = require('mongoose');
const Schema = mongoose.Schema

// defining schema
const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    quantity :{
        type:Number,
        required:true
    },
    isSanitized:Boolean,
    unit:{
        type:String,
        required:true
    },
    expiry:{
        type:Date,
        default:null
    },
    createdAt: {
        type:Date,
        default:Date.now
     },
     updatedAt:{
         type:Date,
         default:Date.now
     },
    category: {
    enum:["Grocery", "Medical", "Fruits&Veg", "Beverages", "Babycare", "Cleaning"],type:String},
    location:{
        enum:["store","kitchen"],type:String}  
    ,
})
// itemSchema.pre('update', function() {
//     this.set({ updatedAt: Date.now() });
//   });
const itemList = mongoose.model('itemList',itemSchema)
 module.exports = itemList;