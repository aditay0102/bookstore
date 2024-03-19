import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required : true
        },
        usename: {
            type: String,
            required: true
        },
        password: {
            type: Number,
            required : true
        },
        createdAt : {
            type : Date,
            default : new Date(),
        }

    }
)

userSchema.pre("save",async ()=>{
    this.password = await bcrypt.hash(this.password,12);
});

module.exports = mongoose.model("user",userSchema);