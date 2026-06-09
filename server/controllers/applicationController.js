const Application =
require("../models/Application");

exports.addApplication =
async (req,res)=>{

 try{

   const application =
   await Application.create(
   req.body
   );

   res.status(201).json(
   application
   );

 }
 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

}