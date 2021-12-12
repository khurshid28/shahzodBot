const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Shahzod:khurshid2827@shahzocluster.yk0fo.mongodb.net/ShahzodBot?retryWrites=true&w=majority")
.then(e=>console.log("connected to online mongodb"))
.catch(e=>console.log("not connected "))

module.exports={
    mongoose
}