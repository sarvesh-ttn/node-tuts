const  itemList = require('./model');

// get users
module.exports.getAll =async ()=>{
    try{
        const items = await itemList.find();
        return items;
    }
    catch(err){
            const items = {
                success:false,
                error:err.message
            }
            return items;
          
}
}
// update users
module.exports.update = async ({id},{itemName,qty})=>{
    console.log(id,itemName,qty);
const items = await itemList.findOneAndUpdate({_id:id},{name:itemName,quantity:qty},{new:true})
return items;
}
// create users
module.exports.create = async({name,quantity,unit,category,location,expiry})=>{
    try{
        const item = await itemList.findOne({name})
        if(!item){
            const item = await itemList.create({name,quantity,unit,category,location,expiry})
            return item;
        } 
        else{
            item.name = name;
            item.quantity = quantity;
            item.unit = unit;
            item.category = category;
            item.location =location;
            item.expiry=expiry
            const updatedItem = await item.save();
            return updatedItem;
        }
    }
    catch(err){
        const item ={error:err.message}
        return item;
    }
}
// delete users
module.exports.delete = async({id})=>{
const deletedItems = await itemList.findOneAndDelete({_id:id})
return deletedItems;
}