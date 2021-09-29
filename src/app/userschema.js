
const mongoose = require('mongoose');

var schema=mongoose.Schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },
    password:
    {
        type:String
    },
    role:
    {
        type:String
    },
    
    
});
var usr=mongoose.model('user',schema)
module.exports=usr;