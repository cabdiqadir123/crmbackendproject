import mongoose from 'mongoose'

const userSchema=mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:'user'
    },

},
{
    timestamps: true,
  }
)

const User=mongoose.model("users",userSchema)

export default User