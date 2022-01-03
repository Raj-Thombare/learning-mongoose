const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new Schema({
  name:{
    type:String,
    required:[true, "Enter fruit name!"]
  },
  rating:Number,
  review:String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
  rating:1,
  review:"grapes are soar!"
})

fruit.save();

const personSchema = new Schema({
  name:String,
  age:Number
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
  name:"Raj",
  age:20
})

// person.save();

// const mango = new Fruit({
//   name:"Mango",
//   rating:9,
//   review:"Too good for me!"
// })

// const banana = new Fruit({
//   name:"Banana",
//   rating:9.5,
//   review:"healthy"
// })

// const strawberry = new Fruit({
//   name:"Strawberry",
//   rating:9,
//   review:"My favorite"
// })

// Fruit.insertMany([mango,banana,strawberry],function(err){
//   if(err){
//     console.log("Error occurred!")
//   }else{
//     console.log("Successfully saved all the fruits to fruitsDB!")
//   }
// })

// Fruit.find(function(err,fruits){
//   if(err){
//     console.log("Error occurred!")
//   }else{
//     mongoose.connection.close();
//     fruits.forEach(fruits => console.log(fruits.name))
//   }
// })