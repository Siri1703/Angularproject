router=require('express').Router()

router.get('/login/:email/:password',(req,res) =>
{
//    res.sendFile(__dirname+'/');
//    console.log(__dirname);
console.log(req.params.id)
if(req.params.email=='s@gmail.com' && req.params.password=='siri')
{
    res.send("valid credentials "+req.params.email+req.params.password);


}
else{
    res.send('invalid credentilas');
}


})
// router.get('/home',(req,res)=>{
//     console.log(req.body);
//     res.status(200).send({"message" : "data saved successfully"});
// })
module.exports=router