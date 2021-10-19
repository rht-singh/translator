const mongoose = require('mongoose');

let translator = new mongoose.Schema({
    text:{
        type:String,
        default:""
    },
    convertedLang:{
        type:String,
        default:""
    },
    convertedText:{
        type:String,
        default:""
    }
})

let translate = new mongoose.model('translate',translator);
module.exports = translate;