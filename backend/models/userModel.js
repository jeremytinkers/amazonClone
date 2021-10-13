import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    //Options
    timestamps: true, // -> createdAt, updatedAt
  }
);

//User object/instance of the schema userSchema 
const User = mongoose.model('User', userSchema);
export default User;