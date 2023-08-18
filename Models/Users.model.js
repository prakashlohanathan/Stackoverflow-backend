const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  }

});

// const User = mongoose.model("users", UserSchema);
// module.exports = User;

 module.exports = mongoose.model("users", UserSchema);
