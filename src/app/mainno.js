var app=require('express')();
 const cors=require('cors');
 const bcrypt=require('bcrypt');
 const jwt=require('jsonwebtoken');
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(cors({
    origin: '*'
}));
var s=require('./userschema.js');
const mongoose = require('mongoose');
const url='mongodb://localhost:27017/angulardemo'
mongoose.connect(url);
let db=mongoose.connection;
db.on('open',()=>{
  console.log("database connected successfully")
});

app.use('/auth',require('./route.js'))
app.post('/home',async (req,res,next)=>{
    console.log(req.body);
    // if(req.body.email==user. && req.body.password=="siri")
    // {
    //     // var user={
    //     //     email:req.body.email,
    //     //     password:siri
    //     // }
    // res.send({"message" : "valid user"});
  
    // }
    // else{
    //     res.send({"message":"Invalid user"})
    // }
    // next()
    const user=new s({
        email:req.body.email,
        password:req.body.password,
    })
        const email=req.body.email;
        const password=req.body.password;
        const uservalid=await s.findOne({email:email});
        // const hashpassword=await bcrypt.hash(password,10);
        const valid=await bcrypt.compareSync(password,uservalid.password);
         console.log(valid);
        // console.log(uservalid.password);
        // console.log(password);
        // console.log(hashpassword);
    
        if( valid)
        {
            const token=jwt.sign({email:uservalid.email,role:uservalid.role},"siri");
            console.log(token);
            console.log("uservalid");
        //res.send({"message":"valid"});
        res.send({"message":token});
        
       
        }
   
   else{
        console.log("invalid");
        res.send({"message":"invalid user"})
    }
})
app.post('/user',async (req,res)=>{
const salt=await bcrypt.genSaltSync(10);
const user= new s({
    name:req.body.name,
    email:req.body.email,
    password:await bcrypt.hashSync(req.body.password,salt),
   
    role:'admin',
})



await user.save();
res.send("details saved successfully");
console.log(user);


})
app.get('/alluser',async(req,res)=>{
    const user=await s.find();
    console.log(user);
    console.log(await s.find({},{"password":1}));
    res.send(JSON.stringify(user));

    
})
app.listen(2000)
