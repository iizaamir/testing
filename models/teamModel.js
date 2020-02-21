const mongoose = require('mongoose');
// const slugify = require('slugify');
// const User = require('./userModel');
//const validator = require('validator');
//Implementing a simple tour schema and model.
const teamSchema = new mongoose.Schema({ //Pass schema defination as an a schema object.
    name: {
        type:String,
        require : [true,'A team must have a name']
    },
    category:{
        type:String
    },
    teamLead:{
        type:String
    },
},
    {  //2nd is the object for schema options, when data is outputted as json so then true
    toJSON: {virtuals : true},
    toObject: {virtuals : true}
    }); 

const Team = new mongoose.model('Team',teamSchema);
module.exports = Team;
