
const testController= (req,res)=>{
   res.status(200).send({
    message: "Welcome user",
    suscess:true,
   });
};
module.exports = { testController } ;
