const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

  user:{
    type:String,
    required:true
    },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  answers: {
    type: [String],
    default:[] ,
  },
    created_at: { type: Date,
       default: () => { return new Date() } },
    
  }
);

module.exports = mongoose.model("Questions", questionSchema);


