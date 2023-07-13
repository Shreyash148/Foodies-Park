const mongoose =require('mongoose');

const mongo = ()=>{
    const url="mongodb://smshendkar3:6pj8wQNb0x701Wzn@ac-dm1phho-shard-00-00.wjroctb.mongodb.net:27017,ac-dm1phho-shard-00-01.wjroctb.mongodb.net:27017,ac-dm1phho-shard-00-02.wjroctb.mongodb.net:27017/FoodiesPark?ssl=true&replicaSet=atlas-6nbgsc-shard-0&authSource=admin&retryWrites=true&w=majority"
    mongoose.connect(url);
    console.log("mongodb connected");
}
module.exports = mongo;