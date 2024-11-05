import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    // The unique rule only works when the collection is first created
    // You cannot create a custom error message with the array syntax on the unique rule
    unique: true
  },
  password: {
    type: String,
    // Ensure the string is at least 6 chars long
    minLength: [6, 'Your password must be at least 6 characters in length']
  }
});

const User = model('User', userSchema);

export default User;