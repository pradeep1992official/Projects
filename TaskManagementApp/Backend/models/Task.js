const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title : {
    type:string,
    required:true,
  },
  description :{
    type:string,
  },
  status :{
    type:string,
    enum : ["pending", "completed", "in Progress"],
    default : "pending",
  },
  priority :{
    type:string,
    enum : ["low", "medium", "high"],
    default : "medium",
  }
  assignedTo : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User", 
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },

  //file metadata
  files: [
    {
      fileName : {
        type : String,
      },
      fileUrl : {
        type : String,
      }
      fileType : {
        type : String,
      }
    }
  ]
  createdAt : {
    type : Date,
    default : Date.now,
  },
  dueDate : {
    type : Date
  }
});

module.exports = mongoose.model("Tasks",taskSchema)