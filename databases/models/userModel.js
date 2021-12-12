const { mongoose }=require("../../exports/mongoose")

const UserSchema=mongoose.Schema({
    username:String,
    id:{
        type:Number,
        unique: true,
    },
})


const UserModel=mongoose.model("user",UserSchema)

module.exports= {
    UserModel
}